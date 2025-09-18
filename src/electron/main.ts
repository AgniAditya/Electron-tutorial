import {app , BrowserWindow, ipcMain} from 'electron';
import path from 'path'
import { isDev, getAllLLMModels , getAllSoftwares} from './utils.js';
import { getPreloadPath } from './pathResolver.js';

app.on('ready', () => {
    const mainWindow = new BrowserWindow({
        webPreferences: {
            preload: getPreloadPath()
        }
    })
    if(isDev()){
        mainWindow.loadURL('http://localhost:8000');
    }
    else{
        mainWindow.loadFile(path.join(app.getAppPath(),'/dist-react/index.html'))
    }

    ipcMain.handle('llmModels',() => {
        try {
            const models = getAllLLMModels();
            return models;
        } catch (error) {
            console.error("Error handling llmModels request:", error);
            throw error;
        }
    })

    ipcMain.handle('allSoftware',() => {
        try {
            const softwares = getAllSoftwares();
            return softwares;
        } catch (error) {
            console.error("Error handling softwares data request:", error);
            throw error;
        }
    })
})