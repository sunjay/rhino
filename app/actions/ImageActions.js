const Actions = require('./Actions');

exports.ACTION_UPDATE_IMAGE = Actions.register('image-update');
exports.ACTION_LOAD_IMAGE = Actions.register('image-load');

exports.updateImage = Actions.registerActionCreator(
  exports.ACTION_UPDATE_IMAGE,
  [
    'path',
    'width',
    'height',
    'data',
  ]
);

exports.loadImage = Actions.registerActionCreator(
  exports.ACTION_LOAD_IMAGE,
  [
    'path',
  ]
);
