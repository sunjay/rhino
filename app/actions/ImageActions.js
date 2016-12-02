const Actions = require('./Actions');

exports.ACTION_UPDATE_IMAGE = Actions.register('image-update');
exports.ACTION_LOAD_IMAGE = Actions.register('image-load');
exports.ACTION_DESTROY_IMAGE = Actions.register('image-destroy');
exports.ACTION_CHANGE_IMAGE_PATH = Actions.register('image-change-path');
exports.ACTION_FLIP_IMAGE_HORIZONTAL = Actions.register('image-fliph');
exports.ACTION_FLIP_IMAGE_VERTICAL = Actions.register('image-flipv');
exports.ACTION_ROTATE_IMAGE_90_CLOCKWISE = Actions.register('image-rotate-90-clockwise');
exports.ACTION_ROTATE_IMAGE_90_COUNTERCLOCKWISE = Actions.register('image-rotate-90-counterclockwise');
exports.ACTION_ROTATE_IMAGE_180 = Actions.register('image-rotate-180');
exports.ACTION_RESIZE_IMAGE = Actions.register('image-resize');
exports.ACTION_RESIZE_CANVAS = Actions.register('image-resize-canvas');

exports.updateImage = Actions.registerActionCreator(
  exports.ACTION_UPDATE_IMAGE,
  [
    'path',
    'width',
    'height',
    'canUndo',
    'canRedo',
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

exports.rotate90Clockwise = Actions.registerActionCreator(
  exports.ACTION_ROTATE_IMAGE_90_CLOCKWISE
);

exports.rotate90Counterclockwise = Actions.registerActionCreator(
  exports.ACTION_ROTATE_IMAGE_90_COUNTERCLOCKWISE
);

exports.rotate180 = Actions.registerActionCreator(
  exports.ACTION_ROTATE_IMAGE_180
);

exports.resizeImage = Actions.registerActionCreator(
  exports.ACTION_RESIZE_IMAGE,
  [
    'width',
    'height',
  ]
);

exports.resizeCanvas = Actions.registerActionCreator(
  exports.ACTION_RESIZE_CANVAS,
  [
    'width',
    'height',
    'anchor',
  ]
);
