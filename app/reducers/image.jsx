const {createReducer} = require('./reducer');

const Image = require('../models/image');

const {
  ACTION_NEW_IMAGE,
  ACTION_UPDATE_IMAGE,
} = require('../actions/ImageActions');

module.exports = createReducer(null, {
  [ACTION_NEW_IMAGE](state, {width, height}) {
    return new Image({width, height});
  },

  [ACTION_UPDATE_IMAGE](state, {image}) {
    return image;
  },
});
