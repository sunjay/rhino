const {createReducer} = require('./reducer');

const Requests = require('../models/requests');

const {ACTION_SEND_REQUEST} = require('../actions/RequestActions');

//TODO: Abort existing requests
const requests = createReducer(new Requests(), {
  [ACTION_SEND_REQUEST](state, action) {
    return state.update('pending', (p) => p.update(action.id, 0, (n) => n + 1));
  },
});

module.exports = requests;
