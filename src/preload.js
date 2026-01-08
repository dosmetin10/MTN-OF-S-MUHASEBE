const { contextBridge } = require("electron");

contextBridge.exposeInMainWorld("mtnApp", {
  version: "0.1.0"
});
