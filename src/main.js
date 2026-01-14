const { app, BrowserWindow, ipcMain } = require("electron");
const fs = require("fs/promises");
const path = require("path");

const storageFileName = "mtn-data.json";
const settingsFileName = "mtn-settings.json";

const getDefaultData = () => ({
  customers: [],
  stocks: [],
  cashTransactions: [],
  sales: [],
  stockMovements: []
});

const loadStorage = async () => {
  const filePath = path.join(app.getPath("userData"), storageFileName);
  try {
    const raw = await fs.readFile(filePath, "utf8");
    return JSON.parse(raw);
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
    licenseKey: ""
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

const generateCode = (prefix) => {
  const stamp = new Date().toISOString().replace(/[-:.TZ]/g, "").slice(0, 12);
  const random = Math.floor(Math.random() * 900 + 100);
  return `${prefix}-${stamp}-${random}`;
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
    data.customers = createRecord(data.customers, {
      code: payload.code || generateCode("CAR"),
      balance: 0,
      ...payload
    });
    await saveStorage(data);
    await syncStorageCopies(data);
    await maybeAutoBackup(data);
    return data.customers;
  });

  ipcMain.handle("customers:payment", async (_event, payload) => {
    const data = await loadStorage();
    const { customerId, amount, note } = payload;
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
      customerId,
      customerName
    });
    await saveStorage(data);
    await syncStorageCopies(data);
    await maybeAutoBackup(data);
    return data;
  });

  ipcMain.handle("stocks:create", async (_event, payload) => {
    const data = await loadStorage();
    data.stocks = createRecord(data.stocks, {
      code: payload.code || generateCode("STK"),
      ...payload
    });
    await saveStorage(data);
    await syncStorageCopies(data);
    await maybeAutoBackup(data);
    return data.stocks;
  });

  ipcMain.handle("stocks:movement", async (_event, payload) => {
    const data = await loadStorage();
    const { stockName, type, quantity, note } = payload;
    data.stockMovements = createRecord(data.stockMovements, {
      stockName,
      type,
      quantity: Number(quantity || 0),
      note
    });
    data.stocks = data.stocks.map((stock) => {
      if (stock.name !== stockName) {
        return stock;
      }
      const current = Number(stock.quantity || 0);
      const delta = Number(quantity || 0);
      const nextQuantity = type === "giris" ? current + delta : current - delta;
      return {
        ...stock,
        quantity: Math.max(nextQuantity, 0)
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
        quantity: Math.max(nextQuantity, 0)
      };
    });
    data.stocks = updatedStocks;

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
    const content = `<!DOCTYPE html><html><head><meta charset=\"utf-8\" /><style>body{font-family:Segoe UI,Arial,sans-serif;margin:24px;color:#1f2a44;position:relative}h1{font-size:20px;margin-bottom:10px}.report-header{display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:16px}.report-header p{margin:4px 0;font-size:11px;color:#516081}.report-logo{font-size:28px;font-weight:700;color:#004c8c}.report-watermark{position:fixed;top:35%;left:10%;right:10%;text-align:center;font-size:48px;color:rgba(0,76,140,0.1);transform:rotate(-18deg);z-index:0}.report-watermark img{width:220px;opacity:0.08}table{width:100%;border-collapse:collapse;font-size:12px;position:relative;z-index:1}th,td{border:1px solid #d7deef;padding:8px;text-align:left}th{background:#f2f5fb}</style></head><body>${html}</body></html>`;
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
