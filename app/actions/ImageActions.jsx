const Actions = require('./Actions');

export const ACTION_UPDATE_IMAGE = Actions.register('image-update');
export const ACTION_OPEN_IMAGE = Actions.register('image-open');

export const updateImage = Actions.registerActionCreator(
  ACTION_UPDATE_IMAGE,
  [
    'path',
    'width',
    'height',
    'data',
  ]
);

export const openImage = Actions.registerActionCreator(
  ACTION_OPEN_IMAGE,
  [
    'path',
  ]
);
