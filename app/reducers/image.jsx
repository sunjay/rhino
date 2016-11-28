const {createReducer} = require('./reducer');

const Image = require('../models/image');

const {
  ACTION_UPDATE_IMAGE,
} = require('../actions/ImageActions');

module.exports = createReducer(null, {
  [ACTION_UPDATE_IMAGE](state, {path, width, height, data}) {
    return new Image({path, width, height, data});
  },
});
