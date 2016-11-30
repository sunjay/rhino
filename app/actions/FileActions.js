const Actions = require('./Actions');

exports.ACTION_OPEN_FILE = Actions.register('file-open');
exports.ACTION_SAVE_FILE = Actions.register('file-save');
exports.ACTION_SAVE_AS_FILE = Actions.register('file-save-as');
exports.ACTION_CLOSE_FILE = Actions.register('file-close');

exports.openFile = Actions.registerActionCreator(
  exports.ACTION_OPEN_FILE
);

exports.saveFile = Actions.registerActionCreator(
  exports.ACTION_SAVE_FILE
);

exports.saveFileAs = Actions.registerActionCreator(
  exports.ACTION_SAVE_AS_FILE
);

exports.closeFile = Actions.registerActionCreator(
  exports.ACTION_CLOSE_FILE
);
