const Actions = require('./Actions');

exports.ACTION_UNDO = Actions.register('edit-undo');
exports.ACTION_REDO = Actions.register('edit-redo');

exports.undo = Actions.registerActionCreator(
  exports.ACTION_UNDO
);

exports.redo = Actions.registerActionCreator(
  exports.ACTION_REDO
);
