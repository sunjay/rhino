const Actions = require('./Actions');

exports.ACTION_MINIMIZE_WINDOW = Actions.register('window-minimize');
exports.ACTION_MAXIMIZE_WINDOW = Actions.register('window-maximize');
exports.ACTION_CLOSE_WINDOW = Actions.register('window-close');
exports.ACTION_RELOAD_WINDOW = Actions.register('window-reload');
exports.ACTION_TOGGLE_DEVTOOLS = Actions.register('window-toggle-devtools');
exports.ACTION_TOGGLE_FULLSCREEN = Actions.register('window-toggle-fullscreen');
exports.ACTION_OPEN_URL = Actions.register('window-open-url');
exports.ACTION_SHOW_ABOUT_SCREEN = Actions.register('window-show-about-screen');
exports.ACTION_SHOW_RESIZE_DIALOG = Actions.register('window-show-resize-dialog');
exports.ACTION_SHOW_RESIZE_CANVAS_DIALOG = Actions.register('window-show-resize-canvas-dialog');

exports.minimizeWindow = Actions.registerActionCreator(
  exports.ACTION_MINIMIZE_WINDOW
);

exports.maximizeWindow = Actions.registerActionCreator(
  exports.ACTION_MAXIMIZE_WINDOW
);

exports.closeWindow = Actions.registerActionCreator(
  exports.ACTION_CLOSE_WINDOW
);

exports.reloadWindow = Actions.registerActionCreator(
  exports.ACTION_RELOAD_WINDOW
);

exports.toggleDevTools = Actions.registerActionCreator(
  exports.ACTION_TOGGLE_DEVTOOLS
);

exports.toggleFullscreen = Actions.registerActionCreator(
  exports.ACTION_TOGGLE_FULLSCREEN
);

exports.openURL = Actions.registerActionCreator(
  exports.ACTION_OPEN_URL,
  [
    'url',
  ]
);

exports.aboutRhino = Actions.registerActionCreator(
  exports.ACTION_SHOW_ABOUT_SCREEN
);

exports.showResizeDialog = Actions.registerActionCreator(
  exports.ACTION_SHOW_RESIZE_DIALOG
);

exports.showResizeCanvasDialog = Actions.registerActionCreator(
  exports.ACTION_SHOW_RESIZE_CANVAS_DIALOG
);
