const {connect} = require('react-redux');

const {
  resizeImage,
} = require('../actions/ImageActions');

const {
  closeWindow,
  sendModalResponse,
} = require('../actions/WindowActions');

const ResizeCanvasForm = require('../components/ResizeCanvasForm');

const mapStateToProps = (state, {width, height}) => ({
  initialWidth: width,
  initialHeight: height,
});

const mapDispatchToProps = (dispatch) => ({
  onCancel() {
    dispatch(closeWindow());
  },

  onSubmit(width, height) {
    dispatch(sendModalResponse(resizeImage(width, height)));
    dispatch(closeWindow());
  },
});

module.exports = connect(
  mapStateToProps,
  mapDispatchToProps
)(ResizeCanvasForm);
