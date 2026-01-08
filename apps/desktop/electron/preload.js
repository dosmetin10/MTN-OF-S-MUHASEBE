const { contextBridge } = require("electron");

contextBridge.exposeInMainWorld("mtn", {
  appName: "MTN Muhasebe",
  version: "0.1.0"
});
