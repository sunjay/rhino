const {createReducer} = require('./reducer');

const {
  ACTION_UPDATE_IMAGE,
} = require('../actions/ImageActions');

const IMAGE_PATH = Symbol('image path');

const initialState = Object.freeze({
  centerX: 0.5,
  centerY: 0.5,
  zoom: 1,
  [IMAGE_PATH]: null,
});

module.exports = createReducer(initialState, {
  [ACTION_UPDATE_IMAGE](state, {path}) {
    const prevPath = state[IMAGE_PATH];

    if (prevPath !== path) {
      state = initialState;
    }

    return Object.freeze({
      ...state,
      [IMAGE_PATH]: path,
    });
  },
});
