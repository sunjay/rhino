const Actions = require('./Actions');

exports.ACTION_UPDATE_IMAGE = Actions.register('image-update');
exports.ACTION_LOAD_IMAGE = Actions.register('image-load');
exports.ACTION_DESTROY_IMAGE = Actions.register('image-destroy');
exports.ACTION_CHANGE_IMAGE_PATH = Actions.register('image-change-path');
exports.ACTION_FLIP_IMAGE_HORIZONTAL = Actions.register('image-fliph');
exports.ACTION_FLIP_IMAGE_VERTICAL = Actions.register('image-flipv');

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

exports.destroyImage = Actions.registerActionCreator(
  exports.ACTION_DESTROY_IMAGE
);

exports.changeImagePath = Actions.registerActionCreator(
  exports.ACTION_CHANGE_IMAGE_PATH,
  [
    'path',
  ]
);

exports.flipHorizontal = Actions.registerActionCreator(
  exports.ACTION_FLIP_IMAGE_HORIZONTAL
);

exports.flipVertical = Actions.registerActionCreator(
  exports.ACTION_FLIP_IMAGE_VERTICAL
);
