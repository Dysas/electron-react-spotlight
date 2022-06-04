import { app } from 'electron';
import path from 'path';
import getAssetPath from '../utils/getAssetPath';

export default {
  title: 'Spotlight Electron',
  icon: getAssetPath('icon.png'),
  // width: 600,
  // height: 100,
  width: 1024,
  height: 768,
  show: false,
  frame: false,
  transparent: true,
  resizable: false,
  movable: true,
  skipTaskbar: true,
  useContentSize: false,
  autoHideMenuBar: true,
  webPreferences: {
    preload: app.isPackaged
      ? path.join(__dirname, 'preload.js')
      : path.join(__dirname, '../../.erb/dll/preload.js'),
  },
};
