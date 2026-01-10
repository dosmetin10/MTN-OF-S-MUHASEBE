const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electronAPI', {
	openModule: (moduleName) => ipcRenderer.invoke('open-module', moduleName),
	login: (username, password) => ipcRenderer.invoke('auth-login', { username, password }),
	createUser: (username, password, role) => ipcRenderer.invoke('auth-create-user', { username, password, role }),
	ping: () => ipcRenderer.invoke('ping')
	,runAI: (payload) => ipcRenderer.invoke('ai-checks', payload)
});
