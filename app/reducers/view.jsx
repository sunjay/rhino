const {createReducer} = require('./reducer');

const {
  ACTION_UPDATE_IMAGE,
} = require('../actions/ImageActions');

const {
  ACTION_TOGGLE_FULLSCREEN,
  ACTION_MODAL_OPEN,
  ACTION_MODAL_CLOSED,
} = require('../actions/WindowActions');

// Lighter representation of image with only properties relevant to this reducer
const LIGHT_IMAGE = Symbol('light-image');

const initialViewState = Object.freeze({
  centerX: 0.5,
  centerY: 0.5,
  zoom: 1,
  [LIGHT_IMAGE]: {},
});

module.exports = createReducer({
  ...initialViewState,
  fullscreen: false,
  isModalOpen: false,
}, {
  [ACTION_UPDATE_IMAGE](state, {path, width, height}) {
    const prev = state[LIGHT_IMAGE];

    if (width !== prev.width || height !== prev.height) {
      // We take the minimum because that is most
      // likely to allow the image to fit
      state = {
        ...state,
        zoom: Math.min(
          width / (prev.width || width),
          height / (prev.height || height)
        ),
      };
    }

    if (path !== prev.path) {
      state = {...state, initialViewState};
    }

    return Object.freeze({
      ...state,
      [LIGHT_IMAGE]: {path, width, height},
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
