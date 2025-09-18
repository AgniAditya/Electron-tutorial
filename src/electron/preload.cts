const electron = require('electron')

electron.contextBridge.exposeInMainWorld('electron',{
    llmModels: async (callback : any) => {
        try {
            const llmModelsData = await electron.ipcRenderer.invoke('llmModels');
            callback(llmModelsData);  // Pass the received data to the callback
        } catch (error) {
            console.error("Error fetching llmModels", error);
        }
    },
    cuurentSoftware: (callback : any) => {
        electron.ipcRenderer.on('currentSoftware',(_ : any, current_Software : any) => {
            callback(current_Software)
        })
    }
    ,
    allSoftware: async (callback : any) => {
        try {
            const allSoftwareData = electron.ipcRenderer.invoke('allSoftware')
            callback(allSoftwareData)
        } catch (error) {
            console.error("Error fetching all software", error);
        }
    }
})