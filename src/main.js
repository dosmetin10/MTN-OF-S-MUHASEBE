const { app, BrowserWindow, ipcMain } = require("electron");
const fs = require("fs/promises");
const path = require("path");

const storageFileName = "mtn-data.json";

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
  return {
    customers: [],
    stocks: [],
    cashTransactions: []
  };
};

const saveStorage = async (data) => {
  const filePath = path.join(app.getPath("userData"), storageFileName);
  await fs.writeFile(filePath, JSON.stringify(data, null, 2), "utf8");
};

const createRecord = (items, record) => [
  ...items,
  {
    id: `${Date.now()}-${Math.random().toString(16).slice(2)}`,
    createdAt: new Date().toISOString(),
    ...record
  }
];

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

  ipcMain.handle("backup:create", async (_event, payload) => {
    const baseDir = path.join(
      app.getPath("documents"),
      "MTN-Muhasebe-Yedekler"
    );
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
  });

  ipcMain.handle("data:get", async () => loadStorage());

  ipcMain.handle("customers:create", async (_event, payload) => {
    const data = await loadStorage();
    data.customers = createRecord(data.customers, payload);
    await saveStorage(data);
    return data.customers;
  });

  ipcMain.handle("stocks:create", async (_event, payload) => {
    const data = await loadStorage();
    data.stocks = createRecord(data.stocks, payload);
    await saveStorage(data);
    return data.stocks;
  });

  ipcMain.handle("cash:create", async (_event, payload) => {
    const data = await loadStorage();
    data.cashTransactions = createRecord(data.cashTransactions, payload);
    await saveStorage(data);
    return data.cashTransactions;
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
    const content = `<!DOCTYPE html><html><head><meta charset=\"utf-8\" /><style>body{font-family:Segoe UI,Arial,sans-serif;margin:24px;color:#1f2a44;position:relative}h1{font-size:20px;margin-bottom:10px}.report-header{display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:16px}.report-header p{margin:4px 0;font-size:11px;color:#516081}.report-logo{font-size:28px;font-weight:700;color:#004c8c}.report-watermark{position:fixed;top:40%;left:10%;right:10%;text-align:center;font-size:48px;color:rgba(0,76,140,0.1);transform:rotate(-18deg);z-index:0}table{width:100%;border-collapse:collapse;font-size:12px;position:relative;z-index:1}th,td{border:1px solid #d7deef;padding:8px;text-align:left}th{background:#f2f5fb}</style></head><body>${html}</body></html>`;
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
