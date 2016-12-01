const {connect} = require('react-redux');

const MenuBar = require('../components/MenuBar');

const {
  minimizeWindow,
  maximizeWindow,
  closeWindow,
  toggleFullscreen,
} = require('../actions/WindowActions');

const mapStateToProps = ({page: {image, view}}, {modal}) => ({
  modal,
  image,
  view,
  isFullScreen: view.fullscreen,
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
