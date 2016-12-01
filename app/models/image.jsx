const {createRecord} = require('./model');

const ImageRecord = createRecord({
}, (constants) => ({
  path: null,
  width: undefined,
  height: undefined,
  canUndo: false,
  canRedo: false,
  data: undefined,
}));

class Image extends ImageRecord {
}

module.exports = Image;
