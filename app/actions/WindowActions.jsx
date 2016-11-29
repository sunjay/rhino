const Actions = require('./Actions');

export const ACTION_MINIMIZE = Actions.register('window-minimize');
export const ACTION_MAXIMIZE = Actions.register('window-maximize');
export const ACTION_CLOSE = Actions.register('window-close');

export const minimize = Actions.registerActionCreator(
  ACTION_MINIMIZE
);

export const maximize = Actions.registerActionCreator(
  ACTION_MAXIMIZE
);

export const close = Actions.registerActionCreator(
  ACTION_CLOSE
);
