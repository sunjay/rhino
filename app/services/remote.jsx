/**
 * This service is responsible for communication with the "remote"
 * The "remote" is the electron main process. It has access to certain APIs
 * which need to be used in special ways by the renderer process.
 */

const path = require('path');

const {
  loadImage,
} = require('../actions/ImageActions');

const {
  ACTION_OPEN_FILE,
} = require('../actions/FileActions');

const {
  ACTION_MINIMIZE_WINDOW,
  ACTION_MAXIMIZE_WINDOW,
  ACTION_CLOSE_WINDOW,
  ACTION_RELOAD_WINDOW,
  ACTION_TOGGLE_DEVTOOLS,
} = require('../actions/WindowActions');

const {
  ipcRenderer: ipc,
  remote: {dialog, BrowserWindow},
} = require('electron');

class Remote {
  constructor() {
  }

  start({dispatch}) {
    ipc.on('action', (event, action) => dispatch(action));
  }

  middleware() {
    const actionHandlers = {
      [ACTION_MINIMIZE_WINDOW](dispatch, win) {
        win.minimize();
      },

      [ACTION_MAXIMIZE_WINDOW](dispatch, win) {
        if (win.isMaximized()) {
          win.unmaximize();
        }
        else {
          win.maximize();
        }
      },

      [ACTION_RELOAD_WINDOW](dispatch, win) {
        win.reload();
      },

      [ACTION_TOGGLE_DEVTOOLS](dispatch, win) {
        if (win.isDevToolsOpened()) {
          win.closeDevTools();
        }
        else {
          win.openDevTools();
        }
      },

      [ACTION_CLOSE_WINDOW](dispatch, win) {
        win.close();
      },

      [ACTION_OPEN_FILE](dispatch) {
        this.open(dispatch);
      },
    };

    return ({dispatch}) => next => action => {
      const handler = actionHandlers[action.type];

      if (handler) {
        const win = BrowserWindow.getFocusedWindow();

        handler.call(this, dispatch, win);
      }

      next(action);
    };
  }

  open(dispatch) {
    const supported = ['jpg', 'jpeg', 'png'];
    const files = dialog.showOpenDialog({
      title: 'Open Image',
      properties: ['openFile', 'createDirectory'],
      filters: [
        {name: `Image Files (${supported.map((e) => '*.' + e).join(', ')})`, extensions: supported},
        {name: 'All Files (*.*)', extensions: ['*']},
      ],
    });

    if (!files) {
      return;
    }

    const file = files[0];
    const filetype = path.extname(file).slice(1);
    if (supported.includes(filetype)) {
      dispatch(loadImage(file));
    }
    else {
      dialog.showErrorBox('Unsupported File Type',
        `The file extension '${filetype}' is not supported.`);
    }
  }
}

module.exports = Remote;
