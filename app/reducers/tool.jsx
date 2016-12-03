const {createReducer} = require('./reducer');

const {
  ACTION_ACTIVATE_TOOL,
  ACTION_CLEAR_ACTIVE_TOOL,
} = require('../actions/ToolActions');

const {
  ACTION_DESTROY_IMAGE,
  ACTION_LOAD_IMAGE,
} = require('../actions/ImageActions');

const initialState = Object.freeze({
  activeToolId: null,
  data: null,
});

const clearActiveTool = () => initialState;

module.exports = createReducer(initialState, {
  [ACTION_ACTIVATE_TOOL](state, {toolId, data}) {
    // Allow toggling tools
    if (toolId === state.activeToolId) {
      return clearActiveTool();
    }

    return Object.freeze({
      ...state,
      activeToolId: toolId,
      data: data,
    });
  },
  [ACTION_CLEAR_ACTIVE_TOOL]: clearActiveTool,
  [ACTION_DESTROY_IMAGE]: clearActiveTool,
  [ACTION_LOAD_IMAGE]: clearActiveTool,
});
