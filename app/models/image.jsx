const {createRecord} = require('./model');

const ImageRecord = createRecord({
}, (constants) => ({
  width: undefined,
  height: undefined,
  buffer: null,
}));

class Image extends ImageRecord {
}

module.exports = Image;
