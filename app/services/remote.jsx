/**
 * This service is responsible for communication with the "remote"
 * The "remote" is the electron main process. It has access to certain APIs
 * which need to be used in special ways by the renderer process.
 */

const path = require('path');

const {
  ipcRenderer: ipc,
  remote: {dialog},
} = require('electron');

class Remote {
  constructor() {
  }

  start(store) {
    ipc.on('action', (event, action) => {
      switch (action) {
        case 'open':
          this.open();
          break;
        default:
          throw new Error(`Unrecognized action received from main process: ${action}`);
      }
    });
  }

  open() {
    const supported = ['jpg', 'jpeg', 'png'];
    const files = dialog.showOpenDialog({
      title: 'Open Image',
      properties: ['openFile', 'createDirectory'],
      filters: [
        {name: 'Image Files (*.jpg, *.jpeg, *.png)', extensions: supported},
        {name: 'All Files (*.*)', extensions: ['*']},
      ],
    });

    const file = files[0];
    const filetype = path.extname(file).slice(1);
    if (supported.includes(filetype)) {
      //TODO
    }
    else {
      dialog.showErrorBox('Unsupported File Type',
        `The file extension '${filetype}' is not supported.`);
    }
  }

  middleware() {
    return store => next => action => next(action);
  }
}

module.exports = Remote;
