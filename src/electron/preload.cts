const electron = require('electron')

electron.contextBridge.exposeInMainWorld('electron',{
    llmModels: (callback : any) => {
        electron.ipcRenderer.on('llmModels',(_ : any, llm_mdoels : any) => {
            callback(llm_mdoels)
        })
    },
    cuurentSoftware: (callback : any) => {
        electron.ipcRenderer.on('currentSoftware',(_ : any, current_Software : any) => {
            callback(current_Software)
        })
    }
    ,
    allSoftware: (callback : any) => {
        electron.ipcRenderer.on('allSoftware',(_ : any, all_Software : any) => {
            callback(all_Software)
        })
    }
})