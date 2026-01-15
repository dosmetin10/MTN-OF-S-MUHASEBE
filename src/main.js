const { app, BrowserWindow, ipcMain } = require("electron");
const fs = require("fs/promises");
const path = require("path");

const storageFileName = "mtn-data.json";
const settingsFileName = "mtn-settings.json";

const getDefaultData = () => ({
  customers: [],
  customerDebts: [],
  customerJobs: [],
  stocks: [],
  cashTransactions: [],
  sales: [],
  stockMovements: []
});

const normalizeData = (data) => ({
  ...getDefaultData(),
  ...data,
  customers: data.customers || [],
  customerDebts: data.customerDebts || [],
  customerJobs: data.customerJobs || [],
  stocks: data.stocks || [],
  cashTransactions: data.cashTransactions || [],
  sales: data.sales || [],
  stockMovements: data.stockMovements || []
});

const loadStorage = async () => {
  const filePath = path.join(app.getPath("userData"), storageFileName);
  try {
    const raw = await fs.readFile(filePath, "utf8");
    return normalizeData(JSON.parse(raw));
  } catch (error) {
    if (error.code !== "ENOENT") {
      throw error;
    }
  }
  const data = getDefaultData();
  await saveStorage(data);
  return data;
};

const saveStorage = async (data) => {
  const filePath = path.join(app.getPath("userData"), storageFileName);
  await fs.writeFile(filePath, JSON.stringify(data, null, 2), "utf8");
};

const loadSettings = async () => {
  const filePath = path.join(app.getPath("userData"), settingsFileName);
  try {
    const raw = await fs.readFile(filePath, "utf8");
    return JSON.parse(raw);
  } catch (error) {
    if (error.code !== "ENOENT") {
      throw error;
    }
  }
  return {
    autoSyncPath: "",
    cloudBackupPath: "",
    enableAutoSync: false,
    enableCloudBackup: false,
    enableAutoBackup: false,
    lastAutoBackupAt: "",
    hasOnboarded: false,
    companyName: "MTN Enerji",
    taxOffice: "",
    taxNumber: "",
    logoDataUrl: "",
    defaultCashName: "Ana Kasa",
    users: [],
    licenseKey: "",
    allowNegativeStock: false
  };
};

const getBackupBaseDir = () =>
  path.join(app.getPath("documents"), "MTN-Muhasebe-Yedekler");

const createBackupEntry = async (payload) => {
  const baseDir = getBackupBaseDir();
  await fs.mkdir(baseDir, { recursive: true });
  const timestamp = new Date().toISOString().replace(/[:.]/g, "-");
  const backupDir = path.join(baseDir, `Yedek-${timestamp}`);
  await fs.mkdir(backupDir, { recursive: true });
  const backupPayload = {
    createdAt: new Date().toISOString(),
    ...payload
  };
  await fs.writeFile(
    path.join(backupDir, "yedek.json"),
    JSON.stringify(backupPayload, null, 2),
    "utf8"
  );
  return { backupDir, createdAt: backupPayload.createdAt };
};

const maybeAutoBackup = async (data) => {
  const settings = await loadSettings();
  if (!settings.enableAutoBackup) {
    return;
  }
  const lastRun = settings.lastAutoBackupAt
    ? new Date(settings.lastAutoBackupAt)
    : null;
  const now = new Date();
  if (lastRun && now - lastRun < 1000 * 60 * 60) {
    return;
  }
  await createBackupEntry({
    meta: {
      module: "auto-backup",
      appVersion: "0.1.0"
    },
    data
  });
  await saveSettings({ ...settings, lastAutoBackupAt: now.toISOString() });
};

const saveSettings = async (settings) => {
  const filePath = path.join(app.getPath("userData"), settingsFileName);
  await fs.writeFile(filePath, JSON.stringify(settings, null, 2), "utf8");
};

const syncStorageCopies = async (data) => {
  const settings = await loadSettings();
  const payload = JSON.stringify(data, null, 2);
  const tasks = [];
  if (settings.enableAutoSync && settings.autoSyncPath) {
    const target = path.join(settings.autoSyncPath, storageFileName);
    tasks.push(fs.writeFile(target, payload, "utf8"));
  }
  if (settings.enableCloudBackup && settings.cloudBackupPath) {
    const target = path.join(settings.cloudBackupPath, storageFileName);
    tasks.push(fs.writeFile(target, payload, "utf8"));
  }
  await Promise.allSettled(tasks);
};

const createRecord = (items, record) => {
  const { createdAt, ...rest } = record;
  return [
    ...items,
    {
      id: `${Date.now()}-${Math.random().toString(16).slice(2)}`,
      createdAt: createdAt
        ? new Date(createdAt).toISOString()
        : new Date().toISOString(),
      ...rest
    }
  ];
};

const normalizeNumber = (value) => Number(value || 0);

// Varsayım: kritik seviye girilmezse miktarın %10'u (en az 1) kritik eşik kabul edilir.
const getAutoThreshold = (quantity) => {
  const normalized = normalizeNumber(quantity);
  if (normalized <= 0) {
    return 0;
  }
  return Math.max(1, Math.round(normalized * 0.1));
};

const generateCode = (prefix) => {
  const stamp = new Date().toISOString().replace(/[-:.TZ]/g, "").slice(0, 12);
  const random = Math.floor(Math.random() * 900 + 100);
  return `${prefix}-${stamp}-${random}`;
};

const upsertStockEntry = (data, payload, meta = {}) => {
  const incomingName = (payload.name || "").trim();
  const incomingQuantity = normalizeNumber(payload.quantity);
  if (!incomingName || incomingQuantity <= 0) {
    return;
  }
  // Varsayım: aynı isim (büyük/küçük harf farkı olmadan) aynı stok kartıdır.
  const existingIndex = data.stocks.findIndex(
    (stock) => stock.name?.toLowerCase() === incomingName.toLowerCase()
  );
  const threshold =
    payload.threshold === "" || payload.threshold === undefined
      ? getAutoThreshold(incomingQuantity)
      : normalizeNumber(payload.threshold);
  if (existingIndex >= 0) {
    const existing = data.stocks[existingIndex];
    data.stocks[existingIndex] = {
      ...existing,
      name: incomingName || existing.name,
      diameter: payload.diameter || existing.diameter,
      unit: payload.unit || existing.unit,
      quantity: normalizeNumber(existing.quantity) + incomingQuantity,
      threshold,
      updatedAt: new Date().toISOString()
    };
  } else {
    data.stocks = createRecord(data.stocks, {
      code: payload.code || generateCode("STK"),
      ...payload,
      name: incomingName,
      quantity: incomingQuantity,
      threshold
    });
  }
  data.stockMovements = createRecord(data.stockMovements, {
    stockName: incomingName,
    type: "giris",
    quantity: incomingQuantity,
    note: meta.note || "Fiş girişi",
    createdAt: meta.createdAt || payload.createdAt
  });
};

const createWindow = () => {
  const mainWindow = new BrowserWindow({
    width: 1280,
    height: 800,
    backgroundColor: "#f5f7fb",
    webPreferences: {
      preload: path.join(__dirname, "preload.js")
    }
  });

  mainWindow.loadFile(path.join(__dirname, "renderer", "index.html"));
  return mainWindow;
};

app.whenReady().then(() => {
  const mainWindow = createWindow();

  ipcMain.handle("backup:create", async (_event, payload) =>
    createBackupEntry(payload)
  );

  ipcMain.handle("data:get", async () => loadStorage());
  ipcMain.handle("data:reset", async () => {
    const data = getDefaultData();
    await saveStorage(data);
    await syncStorageCopies(data);
    await maybeAutoBackup(data);
    return data;
  });
  ipcMain.handle("settings:get", async () => loadSettings());
  ipcMain.handle("settings:save", async (_event, payload) => {
    await saveSettings(payload);
    return payload;
  });

  ipcMain.handle("customers:create", async (_event, payload) => {
    const data = await loadStorage();
    const { openingDebt, ...rest } = payload;
    const normalizedOpeningDebt = normalizeNumber(openingDebt);
    data.customers = createRecord(data.customers, {
      code: payload.code || generateCode("CAR"),
      balance: normalizedOpeningDebt,
      ...rest
    });
    if (normalizedOpeningDebt > 0) {
      const latestCustomer = data.customers.at(-1);
      data.customerDebts = createRecord(data.customerDebts, {
        customerId: latestCustomer?.id || "",
        customerName: latestCustomer?.name || "",
        amount: normalizedOpeningDebt,
        note: "Açılış borcu",
        createdAt: payload.createdAt
      });
    }
    await saveStorage(data);
    await syncStorageCopies(data);
    await maybeAutoBackup(data);
    return data.customers;
  });

  ipcMain.handle("customers:payment", async (_event, payload) => {
    const data = await loadStorage();
    const { customerId, amount, note, createdAt } = payload;
    const normalizedAmount = Number(amount || 0);
    const customerName = data.customers.find(
      (customer) => customer.id === customerId
    )?.name;
    data.customers = data.customers.map((customer) => {
      if (customer.id !== customerId) {
        return customer;
      }
      return {
        ...customer,
        balance: Math.max(
          0,
          Number(customer.balance || 0) - Number(normalizedAmount || 0)
        )
      };
    });
    data.cashTransactions = createRecord(data.cashTransactions, {
      type: "gelir",
      amount: normalizedAmount,
      note: note || "Cari Tahsilat",
      createdAt,
      customerId,
      customerName
    });
    await saveStorage(data);
    await syncStorageCopies(data);
    await maybeAutoBackup(data);
    return data;
  });

  ipcMain.handle("customers:debt", async (_event, payload) => {
    const data = await loadStorage();
    const { customerId, amount, note, createdAt } = payload;
    const normalizedAmount = normalizeNumber(amount);
    const customerName = data.customers.find(
      (customer) => customer.id === customerId
    )?.name;
    data.customers = data.customers.map((customer) => {
      if (customer.id !== customerId) {
        return customer;
      }
      return {
        ...customer,
        balance: Number(customer.balance || 0) + normalizedAmount
      };
    });
    data.customerDebts = createRecord(data.customerDebts, {
      customerId,
      customerName,
      amount: normalizedAmount,
      note: note || "Cari Borç",
      createdAt
    });
    await saveStorage(data);
    await syncStorageCopies(data);
    await maybeAutoBackup(data);
    return data;
  });

  ipcMain.handle("customers:job", async (_event, payload) => {
    const data = await loadStorage();
    const {
      customerId,
      title,
      quantity,
      unit,
      unitPrice,
      total,
      note,
      createdAt
    } = payload;
    const normalizedTotal = normalizeNumber(total);
    const customerName = data.customers.find(
      (customer) => customer.id === customerId
    )?.name;
    data.customerJobs = createRecord(data.customerJobs, {
      customerId,
      customerName,
      title,
      quantity: normalizeNumber(quantity),
      unit,
      unitPrice: normalizeNumber(unitPrice),
      total: normalizedTotal,
      note,
      createdAt
    });
    data.customers = data.customers.map((customer) => {
      if (customer.id !== customerId) {
        return customer;
      }
      return {
        ...customer,
        balance: Number(customer.balance || 0) + normalizedTotal
      };
    });
    await saveStorage(data);
    await syncStorageCopies(data);
    await maybeAutoBackup(data);
    return data;
  });

  ipcMain.handle("stocks:create", async (_event, payload) => {
    const data = await loadStorage();
    upsertStockEntry(data, payload, { note: "Stok kartı girişi" });
    await saveStorage(data);
    await syncStorageCopies(data);
    await maybeAutoBackup(data);
    return data.stocks;
  });

  ipcMain.handle("stocks:receipt", async (_event, payload) => {
    const data = await loadStorage();
    const { items = [], createdAt, note } = payload || {};
    items.forEach((item) => {
      upsertStockEntry(data, item, {
        note: note || "Fiş girişi",
        createdAt
      });
    });
    await saveStorage(data);
    await syncStorageCopies(data);
    await maybeAutoBackup(data);
    return data;
  });

  ipcMain.handle("stocks:movement", async (_event, payload) => {
    const data = await loadStorage();
    const { stockName, type, quantity, note, createdAt } = payload;
    const settings = await loadSettings();
    const normalizedQuantity = Number(quantity || 0);
    const matchedStock = data.stocks.find((stock) => stock.name === stockName);
    const currentQuantity = Number(matchedStock?.quantity || 0);
    const nextQuantity =
      type === "giris"
        ? currentQuantity + normalizedQuantity
        : currentQuantity - normalizedQuantity;
    if (
      type === "cikis" &&
      !settings.allowNegativeStock &&
      nextQuantity < 0
    ) {
      return {
        error: `Yetersiz stok: ${stockName} için mevcut ${currentQuantity}, istenen ${normalizedQuantity}.`
      };
    }
    data.stockMovements = createRecord(data.stockMovements, {
      stockName,
      type,
      quantity: normalizedQuantity,
      note,
      createdAt,
      negativeStock: type === "cikis" && nextQuantity < 0
    });
    data.stocks = data.stocks.map((stock) => {
      if (stock.name !== stockName) {
        return stock;
      }
      const current = Number(stock.quantity || 0);
      const delta = normalizedQuantity;
      const nextQuantity = type === "giris" ? current + delta : current - delta;
      return {
        ...stock,
        quantity: settings.allowNegativeStock
          ? nextQuantity
          : Math.max(nextQuantity, 0)
      };
    });
    await saveStorage(data);
    await syncStorageCopies(data);
    await maybeAutoBackup(data);
    return data;
  });

  ipcMain.handle("cash:create", async (_event, payload) => {
    const data = await loadStorage();
    data.cashTransactions = createRecord(data.cashTransactions, payload);
    await saveStorage(data);
    await syncStorageCopies(data);
    await maybeAutoBackup(data);
    return data.cashTransactions;
  });

  ipcMain.handle("sales:create", async (_event, payload) => {
    const data = await loadStorage();
    const { customerId, customerName, items, total, vatRate } = payload;
    const settings = await loadSettings();
    const startingQuantities = new Map(
      data.stocks.map((stock) => [stock.name, Number(stock.quantity || 0)])
    );
    const runningQuantities = new Map(startingQuantities);
    const shortages = [];
    (items || []).forEach((item) => {
      if (!item?.name) {
        return;
      }
      const current = runningQuantities.get(item.name) || 0;
      const requested = Number(item.quantity || 0);
      const nextQuantity = current - requested;
      if (nextQuantity < 0) {
        shortages.push({ name: item.name, current, requested });
      }
      runningQuantities.set(item.name, nextQuantity);
    });
    if (shortages.length && !settings.allowNegativeStock) {
      const details = shortages
        .map(
          (item) =>
            `${item.name} (mevcut ${item.current}, istenen ${item.requested})`
        )
        .join(", ");
      return {
        error: `Yetersiz stok nedeniyle satış kaydedilemedi: ${details}.`
      };
    }
    const saleRecord = {
      customerId,
      customerName,
      items,
      total,
      vatRate
    };
    data.sales = createRecord(data.sales, saleRecord);

    if (customerId) {
      data.customers = data.customers.map((customer) => {
        if (customer.id !== customerId) {
          return customer;
        }
        return {
          ...customer,
          balance: Number(customer.balance || 0) + Number(total || 0)
        };
      });
    }

    const updatedStocks = data.stocks.map((stock) => {
      const item = items.find((entry) => entry.name === stock.name);
      if (!item) {
        return stock;
      }
      const nextQuantity =
        Number(stock.quantity || 0) - Number(item.quantity || 0);
      return {
        ...stock,
        quantity: settings.allowNegativeStock
          ? nextQuantity
          : Math.max(nextQuantity, 0)
      };
    });
    data.stocks = updatedStocks;
    const movementQuantities = new Map(startingQuantities);
    items.forEach((item) => {
      if (!item.name) {
        return;
      }
      const current = movementQuantities.get(item.name) || 0;
      const nextQuantity = current - Number(item.quantity || 0);
      data.stockMovements = createRecord(data.stockMovements, {
        stockName: item.name,
        type: "cikis",
        quantity: normalizeNumber(item.quantity),
        note: `Satış: ${customerName || "Genel"}`,
        negativeStock: nextQuantity < 0
      });
      movementQuantities.set(item.name, nextQuantity);
    });

    data.cashTransactions = createRecord(data.cashTransactions, {
      type: "gelir",
      amount: total,
      note: `Satış: ${customerName || "Genel"}`
    });

    await saveStorage(data);
    await syncStorageCopies(data);
    await maybeAutoBackup(data);
    return data;
  });

  ipcMain.handle("report:generate", async (_event, payload) => {
    const { title, html } = payload;
    const reportsDir = path.join(
      app.getPath("documents"),
      "MTN-Muhasebe-Raporlar"
    );
    await fs.mkdir(reportsDir, { recursive: true });
    const timestamp = new Date().toISOString().replace(/[:.]/g, "-");
    const reportFile = path.join(reportsDir, `${title}-${timestamp}.pdf`);
    const reportWindow = new BrowserWindow({
      show: false,
      webPreferences: {
        sandbox: false
      }
    });
    const content = `<!DOCTYPE html><html><head><meta charset=\"utf-8\" /><style>body{font-family:Segoe UI,Arial,sans-serif;margin:24px;color:#1f2a44;position:relative}h1{font-size:20px;margin-bottom:10px}.report-header{display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:16px}.report-header p{margin:4px 0;font-size:11px;color:#516081}.report-logo{font-size:28px;font-weight:700;color:#004c8c}.report-logo-img{width:140px;max-height:70px;object-fit:contain}.report-watermark{position:fixed;top:35%;left:10%;right:10%;text-align:center;font-size:48px;color:rgba(0,76,140,0.1);transform:rotate(-18deg);z-index:0}.report-watermark img{width:220px;opacity:0.08}table{width:100%;border-collapse:collapse;font-size:12px;position:relative;z-index:1}th,td{border:1px solid #d7deef;padding:8px;text-align:left}th{background:#f2f5fb}</style></head><body>${html}</body></html>`;
    await reportWindow.loadURL(
      `data:text/html;charset=utf-8,${encodeURIComponent(content)}`
    );
    const pdfBuffer = await reportWindow.webContents.printToPDF({});
    await fs.writeFile(reportFile, pdfBuffer);
    reportWindow.close();
    return { reportFile };
  });

  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});
