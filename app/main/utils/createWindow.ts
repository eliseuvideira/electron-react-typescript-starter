import { BrowserWindow, Menu } from 'electron';
import { join } from 'path';
import { format } from 'url';
import {
  createContextMenuDefault,
  createContextMenuTextSelected,
} from './createContextMenu';
import { IS_DEVELOPMENT } from './constants';

const DEFAULT_USER_AGENT =
  'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.116 Safari/537.36';

const getUrl = () => {
  if (IS_DEVELOPMENT) {
    return format({
      pathname: 'localhost:8080',
      protocol: 'http',
      slashes: true,
    });
  }
  return format({
    pathname: join(__dirname, 'index.html'),
    protocol: 'file',
    slashes: true,
  });
};

export const createWindow = (onClose: () => void): BrowserWindow => {
  const mainWindow = new BrowserWindow({
    width: 1080,
    height: 720,
    minWidth: 495,
    webPreferences: {
      nodeIntegration: true,
    },
  });

  const url = getUrl();
  console.log(url);

  mainWindow.loadURL(url, {
    userAgent: DEFAULT_USER_AGENT,
  });

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
