const { contextBridge } = require('electron')

contextBridge.exposeInMainWorld('appInfo', {
  name: 'EPub Reader'
})
