import {app , BrowserWindow, ipcMain} from 'electron';
import path from 'path'
import { isDev, LLMmodels } from './utils.js';
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
        return LLMmodels()
    })
})