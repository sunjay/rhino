const {combineReducers} = require('redux');

const image = require('../image');
const view = require('../view');

module.exports = combineReducers({
  image,
  view,
});
