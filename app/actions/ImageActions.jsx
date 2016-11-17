const Actions = require('./Actions');

export const ACTION_NEW_IMAGE = Actions.register('image-new');
export const ACTION_UPDATE_IMAGE = Actions.register('image-update');

export const newImage = Actions.registerActionCreator(
  ACTION_NEW_IMAGE,
  [
    'width',
    'height',
  ]
);

export const updateImage = Actions.registerActionCreator(
  ACTION_UPDATE_IMAGE,
  [
    'image',
  ]
);
