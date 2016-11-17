const {Map} = require('immutable');

const {createRecord} = require('./model');

const RequestsRecord = createRecord({}, () => ({
  // Map of request ID to request number - the request number
  // is used to ensure that only the latest of this ID is used
  pending: new Map(),
}));

class Requests extends RequestsRecord {
  getRequestNumber(id) {
    return this.pending.get(id);
  }
}

module.exports = Requests;
