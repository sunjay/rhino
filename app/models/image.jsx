const {createRecord} = require('./model');

const ImageRecord = createRecord({
}, (constants) => ({
  width: undefined,
  height: undefined,
  data: null,
}));

class Image extends ImageRecord {
}

module.exports = Image;
