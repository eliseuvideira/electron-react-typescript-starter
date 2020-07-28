import { app, BrowserWindow } from 'electron';
import { createWindow } from './utils/createWindow';

let mainWindow: BrowserWindow | null = null;

const createMainWindow = () => {
  mainWindow = createWindow(() => {
    mainWindow = null;
  });
};

app.on('ready', createMainWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (mainWindow === null) {
    createMainWindow();
  }
});
