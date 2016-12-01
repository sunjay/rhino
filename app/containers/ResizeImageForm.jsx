const {connect} = require('react-redux');

const {closeWindow} = require('../actions/WindowActions');

const ResizeImageForm = require('../components/ResizeImageForm');

const mapStateToProps = (state, {width, height}) => ({
  initialWidth: width,
  initialHeight: height,
});

const mapDispatchToProps = (dispatch) => ({
  onCancel() {
    dispatch(closeWindow());
  },
});

module.exports = connect(
  mapStateToProps,
  mapDispatchToProps
)(ResizeImageForm);
