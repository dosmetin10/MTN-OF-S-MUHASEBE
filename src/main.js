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
};

app.whenReady().then(() => {
  createWindow();

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
