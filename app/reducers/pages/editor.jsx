const {combineReducers} = require('redux');

const image = require('../image');
const view = require('../view');
const tool = require('../tool');

module.exports = combineReducers({
  image,
  view,
  tool,
});
