const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("mtnApp", {
  version: "0.1.0",
  createBackup: (payload) => ipcRenderer.invoke("backup:create", payload),
  getData: () => ipcRenderer.invoke("data:get"),
  createCustomer: (payload) => ipcRenderer.invoke("customers:create", payload),
  collectPayment: (payload) => ipcRenderer.invoke("customers:payment", payload),
  createStock: (payload) => ipcRenderer.invoke("stocks:create", payload),
  moveStock: (payload) => ipcRenderer.invoke("stocks:movement", payload),
  createCash: (payload) => ipcRenderer.invoke("cash:create", payload),
  createSale: (payload) => ipcRenderer.invoke("sales:create", payload),
  generateReport: (payload) => ipcRenderer.invoke("report:generate", payload),
  getSettings: () => ipcRenderer.invoke("settings:get"),
  saveSettings: (payload) => ipcRenderer.invoke("settings:save", payload)
});
