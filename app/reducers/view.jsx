const {createReducer} = require('./reducer');

const {
  ACTION_UPDATE_IMAGE,
} = require('../actions/ImageActions');

const {
  ACTION_TOGGLE_FULLSCREEN,
  ACTION_MODAL_OPEN,
  ACTION_MODAL_CLOSED,
} = require('../actions/WindowActions');

const IMAGE_PATH = Symbol('image path');

const initialViewState = Object.freeze({
  centerX: 0.5,
  centerY: 0.5,
  zoom: 1,
  [IMAGE_PATH]: null,
});

module.exports = createReducer({
  ...initialViewState,
  fullscreen: false,
  isModalOpen: false,
}, {
  [ACTION_UPDATE_IMAGE](state, {path}) {
    const prevPath = state[IMAGE_PATH];

    if (prevPath !== path) {
      state = {...state, initialViewState};
    }

    return Object.freeze({
      ...state,
      [IMAGE_PATH]: path,
    });
  },

  [ACTION_TOGGLE_FULLSCREEN](state) {
    return Object.freeze({
      ...state,
      fullscreen: !state.fullscreen,
    });
  },

  [ACTION_MODAL_OPEN](state) {
    return Object.freeze({
      ...state,
      isModalOpen: true,
    });
  },

  [ACTION_MODAL_CLOSED](state) {
    return Object.freeze({
      ...state,
      isModalOpen: false,
    });
  },
});
