const { app, BrowserWindow, ipcMain } = require("electron");
const fs = require("fs/promises");
const path = require("path");

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
