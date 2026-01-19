const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("mtnApp", {
  version: "0.1.0",
  createBackup: (payload) => ipcRenderer.invoke("backup:create", payload),
  getData: () => ipcRenderer.invoke("data:get"),
  createCustomer: (payload) => ipcRenderer.invoke("customers:create", payload),
  toggleCustomerStatus: (payload) =>
    ipcRenderer.invoke("customers:toggle-status", payload),
  createCustomerTransaction: (payload) =>
    ipcRenderer.invoke("customers:transaction", payload),
  collectPayment: (payload) => ipcRenderer.invoke("customers:payment", payload),
  addDebt: (payload) => ipcRenderer.invoke("customers:debt", payload),
  addCustomerJob: (payload) => ipcRenderer.invoke("customers:job", payload),
  createStock: (payload) => ipcRenderer.invoke("stocks:create", payload),
  createStockReceipt: (payload) => ipcRenderer.invoke("stocks:receipt", payload),
  previewStockImport: (payload) => ipcRenderer.invoke("stocks:import-preview", payload),
  applyStockImport: (payload) => ipcRenderer.invoke("stocks:import-apply", payload),
  transferStockReceipts: (payload) =>
    ipcRenderer.invoke("stocks:receipt-transfer", payload),
  moveStock: (payload) => ipcRenderer.invoke("stocks:movement", payload),
  createCash: (payload) => ipcRenderer.invoke("cash:create", payload),
  createSale: (payload) => ipcRenderer.invoke("sales:create", payload),
  createInvoice: (payload) => ipcRenderer.invoke("invoices:create", payload),
  generateReport: (payload) => ipcRenderer.invoke("report:generate", payload),
  getSettings: () => ipcRenderer.invoke("settings:get"),
  saveSettings: (payload) => ipcRenderer.invoke("settings:save", payload),
  resetData: () => ipcRenderer.invoke("data:reset"),
  saveAttachment: (payload) => ipcRenderer.invoke("attachments:save", payload),
  openFile: (payload) => ipcRenderer.invoke("file:open", payload)
});
