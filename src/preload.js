const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("mtnApp", {
  version: "0.1.0",
  createBackup: (payload) => ipcRenderer.invoke("backup:create", payload),
  getData: () => ipcRenderer.invoke("data:get"),
  createCustomer: (payload) => ipcRenderer.invoke("customers:create", payload),
  createStock: (payload) => ipcRenderer.invoke("stocks:create", payload),
  createCash: (payload) => ipcRenderer.invoke("cash:create", payload),
  generateReport: (payload) => ipcRenderer.invoke("report:generate", payload)
});
