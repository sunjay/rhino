const Actions = require('./Actions');

export const ACTION_UPDATE_IMAGE = Actions.register('image-update');

export const updateImage = Actions.registerActionCreator(
  ACTION_UPDATE_IMAGE,
  [
    'path',
    'width',
    'height',
    'data',
  ]
);
