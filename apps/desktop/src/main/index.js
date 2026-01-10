const { app, BrowserWindow, Menu, ipcMain } = require("electron");
const path = require("path");

const isDev = !app.isPackaged;

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

app.whenReady().then(() => {
  createWindow();

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
