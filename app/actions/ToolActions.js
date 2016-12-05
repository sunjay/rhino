const Actions = require('./Actions');

exports.ACTION_ACTIVATE_TOOL = Actions.register('tool-activate');
exports.ACTION_CLEAR_ACTIVE_TOOL = Actions.register('tool-clear');
exports.ACTION_UPDATE_TOOL_DATA = Actions.register('tool-update-data');

exports.activateTool = Actions.registerActionCreator(
  exports.ACTION_ACTIVATE_TOOL,
  [
    'toolId',
    // optional parameter
    'data',
  ]
);

exports.updateToolData = Actions.registerActionCreator(
  exports.ACTION_UPDATE_TOOL_DATA,
  [
    'data',
  ]
);

exports.clearActiveTool = Actions.registerActionCreator(
  exports.ACTION_CLEAR_ACTIVE_TOOL
);
