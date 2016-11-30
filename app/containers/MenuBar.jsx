const {connect} = require('react-redux');

const MenuBar = require('../components/MenuBar');

const {
  minimizeWindow,
  maximizeWindow,
  closeWindow,
  toggleFullscreen,
} = require('../actions/WindowActions');

const mapStateToProps = ({page: {view: {fullscreen: isFullScreen}}}, {modal}) => ({
  isFullScreen,
  modal,
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
  toggleFullscreen() {
    dispatch(toggleFullscreen());
  },
});

module.exports = connect(
  mapStateToProps,
  mapDispatchToProps
)(MenuBar);
