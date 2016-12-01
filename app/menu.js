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

const {
  flipHorizontal,
  flipVertical,
} = require('./actions/ImageActions');

const alert = global.alert || console.error;

const noImage = ({image}) => !image;

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
        disabled: noImage,
        click() {
          dispatch(saveFile());
        },
      },
      {
        label: 'Save As...',
        accelerator: 'CommandOrControl+Shift+S',
        disabled: noImage,
        click() {
          dispatch(saveFileAs());
        },
      },
      {type: 'separator'},
      {
        label: 'Close',
        accelerator: 'CommandOrControl+W',
        disabled: noImage,
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
        disabled: noImage,
        click() {
          dispatch(undo());
        },
      },
      {
        label: 'Redo',
        accelerator: 'CommandOrControl+Shift+Z',
        disabled: noImage,
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
        disabled: noImage,
        click() {
          alert('Not implemented');
        },
      },
      {
        label: 'Resize...',
        accelerator: 'CommandOrControl+R',
        disabled: noImage,
        click() {
          alert('Not implemented');
        },
      },
      {
        label: 'Canvas Size...',
        accelerator: 'CommandOrControl+Shift+R',
        disabled: noImage,
        click() {
          alert('Not implemented');
        },
      },
      {type: 'separator'},
      {
        label: 'Flip Horizontal',
        disabled: noImage,
        click() {
          dispatch(flipHorizontal());
        },
      },
      {
        label: 'Flip Vertical',
        disabled: noImage,
        click() {
          dispatch(flipVertical());
        },
      },
      {type: 'separator'},
      {
        label: 'Rotate 90\u00B0 Clockwise',
        accelerator: 'CommandOrControl+H',
        disabled: noImage,
        click() {
          alert('Not implemented');
        },
      },
      {
        label: 'Rotate 90\u00B0 Counterclockwise',
        accelerator: 'CommandOrControl+G',
        disabled: noImage,
        click() {
          alert('Not implemented');
        },
      },
      {
        label: 'Rotate 180\u00B0',
        accelerator: 'CommandOrControl+J',
        disabled: noImage,
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
        label: 'About Rhino Editor',
        click() {
          dispatch(aboutRhino());
        },
      },
    ],
  },
];
