const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electronAPI', {
	openModule: (moduleName) => ipcRenderer.invoke('open-module', moduleName)
});

// Placeholder for future secure IPC bridges.
