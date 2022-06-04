/* eslint global-require: off, no-console: off, promise/always-return: off */

/**
 * This module executes inside of electron's main process. You can start
 * electron renderer process from here and communicate with the other processes
 * through IPC.
 *
 * When running `npm run build` or `npm run build:main`, this file is compiled to
 * `./src/main.js` using webpack. This gives us some performance wins.
 */
import { app, BrowserWindow, globalShortcut, ipcMain, shell } from 'electron';
import log from 'electron-log';
import { autoUpdater } from 'electron-updater';
import mainWindwConfig from './mainWindowConfig';
import MenuBuilder from './menu';
import { resolveHtmlPath } from './util';

export default class AppUpdater {
  constructor() {
    log.transports.file.level = 'info';
    autoUpdater.logger = log;
    autoUpdater.checkForUpdatesAndNotify();
  }
}

if (process.platform === 'darwin') app.dock.hide();

let mainWindow: BrowserWindow | null = null;

ipcMain.on('search-request', async (event, [arg]) => {
  console.log('ipcMain search-request', arg);

  const mockData = [
    {
      name: 'google',
      url: 'https://www.google.com',
    },
    {
      name: 'test2',
    },
    {
      name: 'test3',
    },
    {
      name: 'test4',
    },
    {
      name: 'test5',
    },
  ];

  const data = mockData.filter((item) => item.name.includes(arg));
  const maxLength = 5;
  const heightPerItem = 45;
  if (data.length > maxLength) {
    // max nr of items shown
    mainWindow?.setSize(
      mainWindwConfig.width,
      mainWindwConfig.height + heightPerItem * maxLength
    );
  } else {
    // lower nr of items
    mainWindow?.setSize(
      mainWindwConfig.width,
      mainWindwConfig.height + heightPerItem * data.length
    );
  }

  event.reply('search-reply', data);
});

// to be used in the future if i want to reset other things
ipcMain.on('search-reset', (_event, [arg]) => {
  if (arg) {
    switch (arg) {
      case 'size':
        mainWindow?.setSize(mainWindwConfig.width, mainWindwConfig.height);
        break;
      default:
        break;
    }
  }
});

if (process.env.NODE_ENV === 'production') {
  const sourceMapSupport = require('source-map-support');
  sourceMapSupport.install();
}

const isDebug =
  process.env.NODE_ENV === 'development' || process.env.DEBUG_PROD === 'true';

if (isDebug) {
  require('electron-debug')();
}

const installExtensions = async () => {
  const installer = require('electron-devtools-installer');
  const forceDownload = !!process.env.UPGRADE_EXTENSIONS;
  const extensions = ['REACT_DEVELOPER_TOOLS'];

  return installer
    .default(
      extensions.map((name) => installer[name]),
      forceDownload
    )
    .catch(console.log);
};

const createWindow = async () => {
  if (isDebug) {
    await installExtensions();
  }

  mainWindow = new BrowserWindow(mainWindwConfig);

  mainWindow.loadURL(resolveHtmlPath('index.html'));

  mainWindow.on('ready-to-show', () => {
    if (!mainWindow) {
      throw new Error('"mainWindow" is not defined');
    }
    if (process.env.START_MINIMIZED) {
      mainWindow.minimize();
    } else {
      mainWindow.show();
    }
  });

  // On focus create global shortcuts
  mainWindow.on('focus', () => {
    mainWindow?.webContents.send('focus-input');
    // Show and hide the window
    globalShortcut.register('CommandOrControl+Alt+F', () => {
      if (mainWindow?.isFocused()) {
        mainWindow.hide();
      } else {
        mainWindow?.show();
      }
    });

    globalShortcut.register('Escape', () => {
      mainWindow?.hide();
    });

    globalShortcut.register('F12', () => {
      if (mainWindow?.isFocused()) {
        mainWindow.webContents.toggleDevTools();
      }
    });
  });

  mainWindow.on('blur', () => {
    mainWindow?.hide();
    globalShortcut.unregister('Escape');
    globalShortcut.unregister('F12');
  });

  mainWindow.on('closed', () => {
    mainWindow = null;
  });

  const menuBuilder = new MenuBuilder(mainWindow);
  menuBuilder.buildMenu();

  // Open urls in the user's browser
  mainWindow.webContents.setWindowOpenHandler((edata) => {
    shell.openExternal(edata.url);
    return { action: 'deny' };
  });

  // Remove this if your app does not use auto updates
  // eslint-disable-next-line
  new AppUpdater();
};

/**
 * Add event listeners...
 */

app.on('window-all-closed', () => {
  // Respect the OSX convention of having the application in memory even
  // after all windows have been closed
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app
  .whenReady()
  .then(() => {
    createWindow();
    app.on('activate', () => {
      // On macOS it's common to re-create a window in the app when the
      // dock icon is clicked and there are no other windows open.
      if (mainWindow === null) createWindow();
    });
  })
  .catch(console.log);
