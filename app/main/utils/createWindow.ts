import { BrowserWindow, Menu } from 'electron';
import { join } from 'path';
import { format } from 'url';
import {
  createContextMenuDefault,
  createContextMenuTextSelected,
} from './createContextMenu';

export const createWindow = (onClose: () => void): BrowserWindow => {
  const mainWindow = new BrowserWindow({
    width: 1080,
    height: 720,
    minWidth: 495,
    webPreferences: { nodeIntegration: true },
  });

  mainWindow.loadURL(
    format({
      pathname: join(__dirname, 'index.html'),
      protocol: 'file',
      slashes: true,
    }),
    {
      userAgent:
        'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.116 Safari/537.36',
    },
  );

  mainWindow.on('closed', onClose);

  mainWindow.webContents.on('context-menu', (_, props) => {
    let contextMenu: Menu;
    if (props.selectionText) {
      contextMenu = createContextMenuTextSelected(mainWindow, props);
    } else {
      contextMenu = createContextMenuDefault(mainWindow, props);
    }
    contextMenu.popup();
  });

  return mainWindow;
};
