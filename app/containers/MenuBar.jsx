const {connect} = require('react-redux');

const MenuBar = require('../components/MenuBar');

const {minimize, maximize, close} = require('../actions/WindowActions');

const mapStateToProps = () => ({
});

const mapDispatchToProps = (dispatch) => ({
  minimize() {
    dispatch(minimize());
  },
  maximize() {
    dispatch(maximize());
  },
  close() {
    dispatch(close());
  },
});

module.exports = connect(
  mapStateToProps,
  mapDispatchToProps
)(MenuBar);
