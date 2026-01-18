const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("mtnApp", {
  version: "0.1.0",
  createBackup: (payload) => ipcRenderer.invoke("backup:create", payload),
  getData: () => ipcRenderer.invoke("data:get"),
  createCustomer: (payload) => ipcRenderer.invoke("customers:create", payload),
  collectPayment: (payload) => ipcRenderer.invoke("customers:payment", payload),
  addDebt: (payload) => ipcRenderer.invoke("customers:debt", payload),
  addCustomerJob: (payload) => ipcRenderer.invoke("customers:job", payload),
  updateCustomer: (payload) => ipcRenderer.invoke("customers:update", payload),
  createStock: (payload) => ipcRenderer.invoke("stocks:create", payload),
  parseStockImportFile: (payload) =>
    ipcRenderer.invoke("stocks:import:parse", payload),
  transferStockReceipt: (payload) =>
    ipcRenderer.invoke("stocks:receipt:transfer", payload),
  updateStockReceipt: (payload) =>
    ipcRenderer.invoke("stocks:receipt:update", payload),
  deleteStockReceipt: (payload) =>
    ipcRenderer.invoke("stocks:receipt:delete", payload),
  createStockReceipt: (payload) => ipcRenderer.invoke("stocks:receipt", payload),
  saveStockReceipt: (payload) =>
    ipcRenderer.invoke("stocks:receipt:save", payload),
  moveStock: (payload) => ipcRenderer.invoke("stocks:movement", payload),
  createCash: (payload) => ipcRenderer.invoke("cash:create", payload),
  createSale: (payload) => ipcRenderer.invoke("sales:create", payload),
  generateReport: (payload) => ipcRenderer.invoke("report:generate", payload),
  openFile: (filePath) => ipcRenderer.invoke("file:open", filePath),
  createInvoice: (payload) => ipcRenderer.invoke("invoices:create", payload),
  getSettings: () => ipcRenderer.invoke("settings:get"),
  saveSettings: (payload) => ipcRenderer.invoke("settings:save", payload),
  resetData: () => ipcRenderer.invoke("data:reset")
});
