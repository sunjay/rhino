const {connect} = require('react-redux');

const MenuBar = require('../components/MenuBar');

const {
  minimizeWindow,
  maximizeWindow,
  closeWindow,
} = require('../actions/WindowActions');

const mapStateToProps = () => ({
});

const mapDispatchToProps = (dispatch) => ({
  dispatch,
  minimizeWindow() {
    dispatch(minimizeWindow());
  },
  maximizeWindow() {
    dispatch(maximizeWindow());
  },
  closeWindow() {
    dispatch(closeWindow());
  },
});

module.exports = connect(
  mapStateToProps,
  mapDispatchToProps
)(MenuBar);
