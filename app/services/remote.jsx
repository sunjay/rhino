/**
 * This service is responsible for communication with the "remote"
 * The "remote" is the electron main process. It has access to certain APIs
 * which need to be used in special ways by the renderer process.
 */

const url = require('url');
const path = require('path');

const {
  shell,
  ipcRenderer: ipc,
  remote: {dialog, BrowserWindow},
} = require('electron');

const {
  loadImage,
  changeImagePath,
} = require('../actions/ImageActions');

const {
  saveFile,
  ACTION_OPEN_FILE,
  ACTION_SAVE_AS_FILE,
} = require('../actions/FileActions');

const {
  modalOpen,
  modalClosed,
  ACTION_MINIMIZE_WINDOW,
  ACTION_MAXIMIZE_WINDOW,
  ACTION_CLOSE_WINDOW,
  ACTION_RELOAD_WINDOW,
  ACTION_TOGGLE_DEVTOOLS,
  ACTION_TOGGLE_FULLSCREEN,
  ACTION_OPEN_URL,
  ACTION_SHOW_ABOUT_SCREEN,
  ACTION_SHOW_RESIZE_DIALOG,
  ACTION_SHOW_RESIZE_CANVAS_DIALOG,
} = require('../actions/WindowActions');

const actionHandlers = {
  [ACTION_MINIMIZE_WINDOW](win) {
    win.minimize();
  },

  [ACTION_MAXIMIZE_WINDOW](win) {
    if (win.isMaximized()) {
      win.unmaximize();
    }
    else {
      win.maximize();
    }
  },

  [ACTION_RELOAD_WINDOW](win) {
    win.reload();
  },

  [ACTION_TOGGLE_DEVTOOLS](win) {
    if (win.isDevToolsOpened()) {
      win.closeDevTools();
    }
    else {
      win.openDevTools();
    }
  },

  [ACTION_TOGGLE_FULLSCREEN](win) {
    win.setFullScreen(!win.isFullScreen());
  },

  [ACTION_CLOSE_WINDOW](win) {
    win.close();
  },

  [ACTION_OPEN_FILE](win, {dispatch}) {
    this.open(dispatch);
  },

  [ACTION_SAVE_AS_FILE](win, {dispatch, getState}) {
    if (!getState().page.image) {
      return;
    }
    this.saveAs(dispatch);
  },

  [ACTION_OPEN_URL](win, {dispatch}, {url}) {
    shell.openExternal(url);
  },

  [ACTION_SHOW_ABOUT_SCREEN](win, store) {
    this.showModal(win, store, '/about', 480, 400);
  },

  [ACTION_SHOW_RESIZE_DIALOG](win, {dispatch, getState}) {
    const image = getState().page.image;
    if (!image) {
      return;
    }

    this.showModal(win, {dispatch, getState},
      `/resize?width=${image.width}&height=${image.height}`, 300, 250);
  },

  [ACTION_SHOW_RESIZE_CANVAS_DIALOG](win, {dispatch, getState}) {
    const image = getState().page.image;
    if (!image) {
      return;
    }

    this.showModal(win, {dispatch, getState},
      `/canvas-size?width=${image.width}&height=${image.height}`, 480, 400);
  },
};

const supportedFileTypes = ['jpg', 'jpeg', 'png'];
const supportedFilters = [
  {
    name: `Image Files (${supportedFileTypes.map((e) => '*.' + e).join(', ')})`,
    extensions: supportedFileTypes,
  },
  {name: 'All Files (*.*)', extensions: ['*']},
];

class Remote {
  constructor() {
  }

  start({dispatch}) {
    ipc.on('action', (event, action) => dispatch(action));
  }

  middleware() {
    return (store) => next => action => {
      const handler = actionHandlers[action.type];

      if (handler) {
        const win = BrowserWindow.getFocusedWindow();

        handler.call(this, win, store, action);
      }

      next(action);
    };
  }

  showModal(win, {getState, dispatch}, routePath, width, height) {
    // Cannot open a modal while another is open
    if (getState().page.view.isModalOpen) {
      return;
    }

    const child = new BrowserWindow({
      parent: win,
      modal: true,
      show: false,
      frame: false,
      resizable: false,
      width: width,
      height: height,
    });
    child.setMenu(null);

    child.loadURL(url.format({
      protocol: 'file:',
      pathname: path.join(process.env.APP_ROOT, 'index.html'),
      hash: `#${routePath}`,
      slashes: true,
    }));

    child.once('ready-to-show', () => {
      child.show();
    });

    dispatch(modalOpen());
    child.once('closed', () => {
      dispatch(modalClosed());
    });

    if (process.env.NODE_ENV !== 'production') {
      child.openDevTools();
    }
  }

  open(dispatch) {
    const files = dialog.showOpenDialog({
      title: 'Open Image',
      properties: ['openFile', 'createDirectory'],
      filters: supportedFilters,
    });

    this.checkSingleFile(files && files[0], (file) => dispatch(loadImage(file)));
  }

  saveAs(dispatch) {
    const file = dialog.showSaveDialog({
      title: 'Save Image',
      filters: supportedFilters,
    });

    this.checkSingleFile(file, (file) => {
      dispatch(changeImagePath(file));
      dispatch(saveFile());
    });
  }

  checkSingleFile(file, success) {
    if (!file) {
      return;
    }

    const filetype = path.extname(file).slice(1);
    if (supportedFileTypes.includes(filetype)) {
      success(file);
    }
    else {
      dialog.showErrorBox('Unsupported File Type',
        `The file extension '${filetype}' is not supported.`);
    }
  }
}

module.exports = Remote;
