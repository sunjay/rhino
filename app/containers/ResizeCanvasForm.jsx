const {connect} = require('react-redux');

const {
  resizeCanvas,
} = require('../actions/ImageActions');

const {
  closeWindow,
  sendModalResponse,
} = require('../actions/WindowActions');

const ResizeCanvasForm = require('../components/ResizeCanvasForm');

const mapStateToProps = (state, {width, height}) => ({
  initialWidth: Number(width),
  initialHeight: Number(height),
});

const mapDispatchToProps = (dispatch) => ({
  onCancel() {
    dispatch(closeWindow());
  },

  onSubmit(width, height, anchor) {
    dispatch(sendModalResponse(resizeCanvas(width, height, anchor)));
    dispatch(closeWindow());
  },
});

module.exports = connect(
  mapStateToProps,
  mapDispatchToProps
)(ResizeCanvasForm);
