const Actions = require('./Actions');

exports.ACTION_ACTIVATE_TOOL = Actions.register('tool-activate');
exports.ACTION_CLEAR_ACTIVE_TOOL = Actions.register('tool-clear');

exports.activateTool = Actions.registerActionCreator(
  exports.ACTION_ACTIVATE_TOOL,
  [
    'toolId',
    // optional parameter
    'data',
  ]
);

exports.clearActiveTool = Actions.registerActionCreator(
  exports.ACTION_CLEAR_ACTIVE_TOOL
);
