import { Menu, BrowserWindow } from 'electron';

export const createContextMenuDefault = (
  mainWindow: BrowserWindow,
  props: Electron.ContextMenuParams,
) =>
  Menu.buildFromTemplate([
    {
      label: 'Back',
      click: () => {
        mainWindow.webContents.goBack();
      },
      accelerator: 'Alt+Left',
      enabled: mainWindow.webContents.canGoBack(),
    },
    {
      label: 'Forward',
      click: () => {
        mainWindow.webContents.goForward();
      },
      accelerator: 'Alt+Left',
      enabled: mainWindow.webContents.canGoForward(),
    },
    { type: 'separator' },
    { label: 'Reload', role: 'reload', accelerator: 'CommandOrControl+R' },
    { type: 'separator' },
    {
      label: 'Inspect',
      click: () => {
        mainWindow.webContents.inspectElement(props.x, props.y);
      },
      accelerator: 'Shift+CommandOrControl+I',
    },
  ]);

export const createContextMenuTextSelected = (
  mainWindow: BrowserWindow,
  props: Electron.ContextMenuParams,
) =>
  Menu.buildFromTemplate([
    {
      label: 'Copy',
      role: 'copy',
      accelerator: 'CommandOrControl+C',
      enabled: props.editFlags.canCopy,
    },
    { type: 'separator' },
    {
      label: 'Inspect',
      click: () => {
        mainWindow.webContents.inspectElement(props.x, props.y);
      },
      accelerator: 'Shift+CommandOrControl+I',
    },
  ]);
