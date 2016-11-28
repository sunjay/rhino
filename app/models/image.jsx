const {createRecord} = require('./model');

const ImageRecord = createRecord({
}, (constants) => ({
  path: null,
  width: undefined,
  height: undefined,
  data: null,
}));

class Image extends ImageRecord {
}

module.exports = Image;
