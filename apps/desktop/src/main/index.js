const { app, BrowserWindow, Menu, ipcMain } = require("electron");
const path = require("path");
const logger = require("./logger");
const { initDatabase } = require("./db");
const { createUser, verifyUser } = require("./auth");

const isDev = !app.isPackaged;

let dbInstance;

function createWindow() {
  const mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
      contextIsolation: true,
      nodeIntegration: false
    }
  });

  if (isDev) {
    mainWindow.loadURL("http://localhost:5173");
    mainWindow.webContents.openDevTools({ mode: "detach" });
  } else {
    mainWindow.loadFile(path.join(__dirname, "..", "..", "dist", "index.html"));
  }

  return mainWindow;
}

function createSplashWindow() {
  const splash = new BrowserWindow({
    width: 600,
    height: 360,
    frame: false,
    alwaysOnTop: true,
    transparent: true,
    resizable: false,
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
      contextIsolation: true,
      nodeIntegration: false
    }
  });

  if (isDev) {
    splash.loadURL("http://localhost:5173/splash.html");
  } else {
    splash.loadFile(path.join(__dirname, "..", "..", "dist", "splash.html"));
  }

  return splash;
}

function createModuleWindow(moduleName) {
  const win = new BrowserWindow({
    width: 1000,
    height: 700,
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
      contextIsolation: true,
      nodeIntegration: false
    }
  });

  if (isDev) {
    win.loadURL(`http://localhost:5173/?module=${moduleName}`);
    win.webContents.openDevTools({ mode: "detach" });
  } else {
    const filePath = path.join(__dirname, "..", "..", "dist", "index.html");
    win.loadFile(filePath, { query: { module: moduleName } });
  }

  return win;
}

ipcMain.handle("open-module", (_, moduleName) => {
  return createModuleWindow(moduleName);
});

ipcMain.handle('auth-login', async (_, { username, password }) => {
  try {
    const user = await verifyUser(username, password);
    return { ok: !!user, user };
  } catch (err) {
    logger.error(`auth-login error: ${err.message}`);
    return { ok: false, error: err.message };
  }
});

ipcMain.handle('auth-create-user', async (_, { username, password, role }) => {
  try {
    const id = await createUser(username, password, role);
    return { ok: true, id };
  } catch (err) {
    logger.error(`auth-create-user error: ${err.message}`);
    return { ok: false, error: err.message };
  }
});

ipcMain.handle('ping', () => 'pong');

app.whenReady().then(() => {
  try {
    dbInstance = initDatabase();
    logger.info('Database initialized');
  } catch (err) {
    logger.error(`DB init failed: ${err.message}`);
  }

  const splash = createSplashWindow();
  setTimeout(() => {
    try {
      const main = createWindow();
      splash.destroy();
      main.show();
    } catch (err) {
      logger.error(`Failed to create main window: ${err.message}`);
    }
  }, 1500);

  const template = [
    {
      label: "Dosya",
      submenu: [{ role: "quit", label: "Çıkış" }]
    },
    {
      label: "Modüller",
      submenu: [
        { label: "Genel Bakış", click: () => {} },
        { label: "Stok Yönetimi", click: () => createModuleWindow("stok") },
        { label: "Cari Kartlar", click: () => createModuleWindow("cari") },
        { label: "Faturalar", click: () => createModuleWindow("fatura") },
        { label: "Stok Hareketleri", click: () => createModuleWindow("hareket") },
        { label: "Gelir / Gider", click: () => createModuleWindow("kasa") }
      ]
    }
  ];

  const menu = Menu.buildFromTemplate(template);
  Menu.setApplicationMenu(menu);

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
