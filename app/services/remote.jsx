/**
 * This service is responsible for communication with the "remote"
 * The "remote" is the electron main process. It has access to certain APIs
 * which need to be used in special ways by the renderer process.
 */

const path = require('path');

const {openImage} = require('../actions/ImageActions');

const {
  ipcRenderer: ipc,
  remote: {dialog},
} = require('electron');

class Remote {
  constructor() {
  }

  start({dispatch}) {
    ipc.on('action', (event, action) => {
      switch (action) {
        case 'open':
          this.open(dispatch);
          break;
        default:
          throw new Error(`Unrecognized action received from main process: ${action}`);
      }
    });
  }

  middleware() {
    return store => next => action => next(action);
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

    const file = files[0];
    const filetype = path.extname(file).slice(1);
    if (supported.includes(filetype)) {
      dispatch(openImage(file));
    }
    else {
      dialog.showErrorBox('Unsupported File Type',
        `The file extension '${filetype}' is not supported.`);
    }
  }
}

module.exports = Remote;
