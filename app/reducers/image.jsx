const {createReducer} = require('./reducer');

const Image = require('../models/image');

const {
  ACTION_UPDATE_IMAGE,
  ACTION_DESTROY_IMAGE,
  ACTION_CHANGE_IMAGE_PATH,
} = require('../actions/ImageActions');

module.exports = createReducer(null, {
  [ACTION_UPDATE_IMAGE](state, {path, width, height, data}) {
    return new Image({path, width, height, data});
  },

  [ACTION_CHANGE_IMAGE_PATH](state, {path}) {
    return state.set('path', path);
  },

  [ACTION_DESTROY_IMAGE]() {
    return null;
  },
});
