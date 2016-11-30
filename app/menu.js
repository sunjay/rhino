const {
  openFile,
  saveFile,
  saveFileAs,
  closeFile,
} = require('./actions/FileActions');

const {
  undo,
  redo,
} = require('./actions/EditActions');

const {
  toggleDevTools,
  toggleFullscreen,
  reloadWindow,
  openURL,
  aboutRhino,
} = require('./actions/WindowActions');

const alert = global.alert || console.error;

module.exports = (dispatch) => [
  {
    label: 'File',
    submenu: [
      {
        label: 'Open...',
        accelerator: 'CommandOrControl+O',
        click() {
          dispatch(openFile());
        },
      },
      {
        label: 'Save...',
        accelerator: 'CommandOrControl+S',
        click() {
          dispatch(saveFile());
        },
      },
      {
        label: 'Save As...',
        accelerator: 'CommandOrControl+Shift+S',
        click() {
          dispatch(saveFileAs());
        },
      },
      {type: 'separator'},
      {
        label: 'Close',
        accelerator: 'CommandOrControl+W',
        click() {
          dispatch(closeFile());
        },
      },
    ],
  },

  {
    label: 'Edit',
    submenu: [
      {
        label: 'Undo',
        accelerator: 'CommandOrControl+Z',
        click() {
          dispatch(undo());
        },
      },
      {
        label: 'Redo',
        accelerator: 'CommandOrControl+Shift+Z',
        click() {
          dispatch(redo());
        },
      },
    ],
  },

  {
    label: 'Image',
    submenu: [
      {
        label: 'Crop...',
        accelerator: 'CommandOrControl+Shift+X',
        click() {
          alert('Not implemented');
        },
      },
      {
        label: 'Resize...',
        accelerator: 'CommandOrControl+R',
        click() {
          alert('Not implemented');
        },
      },
      {
        label: 'Canvas Size...',
        accelerator: 'CommandOrControl+Shift+R',
        click() {
          alert('Not implemented');
        },
      },
      {type: 'separator'},
      {
        label: 'Flip Horizontal',
        click() {
          alert('Not implemented');
        },
      },
      {
        label: 'Flip Vertical',
        click() {
          alert('Not implemented');
        },
      },
      {type: 'separator'},
      {
        label: 'Rotate 90\u00B0 Clockwise',
        accelerator: 'CommandOrControl+H',
        click() {
          alert('Not implemented');
        },
      },
      {
        label: 'Rotate 90\u00B0 Counterclockwise',
        accelerator: 'CommandOrControl+G',
        click() {
          alert('Not implemented');
        },
      },
      {
        label: 'Rotate 180\u00B0',
        accelerator: 'CommandOrControl+J',
        click() {
          alert('Not implemented');
        },
      },
    ],
  },

  {
    label: 'View',
    submenu: [
      {
        label: 'Toggle Fullscreen',
        accelerator: 'F11',
        click() {
          dispatch(toggleFullscreen());
        },
      },
      {type: 'separator'},
      {
        label: 'Reload Editor',
        accelerator: 'CommandOrControl+Shift+F5',
        click() {
          dispatch(reloadWindow());
        },
      },
      {
        label: 'Toggle DevTools',
        accelerator: 'CommandOrControl+Shift+I',
        click() {
          dispatch(toggleDevTools());
        },
      },
    ],
  },

  {
    label: 'Help',
    submenu: [
      {
        label: 'Website',
        click() {
          dispatch(openURL('http://rhinoeditor.com/'));
        },
      },
      {
        label: 'Report Issue',
        click() {
          dispatch(openURL('http://rhinoeditor.com/bugs'));
        },
      },
      {type: 'separator'},
      {
        label: 'About Rhino',
        click() {
          dispatch(aboutRhino());
        },
      },
    ],
  },
];
