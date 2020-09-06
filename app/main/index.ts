import { app, BrowserWindow, protocol } from 'electron';
import { createWindow } from './utils/createWindow';

let mainWindow: BrowserWindow | null = null;

const createMainWindow = () => {
  mainWindow = createWindow(() => {
    mainWindow = null;
  });
};

const createFileProtocol = () => {
  const name = 'media';
  protocol.registerFileProtocol(name, (request, callback) => {
    const url = request.url.replace(`${name}://`, '');
    try {
      callback(decodeURIComponent(url));
    } catch (err) {
      console.error(err);
    }
  });
};

app.on('ready', () => {
  createFileProtocol();
  createMainWindow();
});

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
