const {connect} = require('react-redux');

const CropToolbar = require('../../components/toolbars/CropToolbar');

const {
  cropImage,
} = require('../../actions/ImageActions');

const {
  clearActiveTool,
  updateToolData,
} = require('../../actions/ToolActions');

const mapStateToProps = ({page: {image, tool: {data}}}) => ({
  ...data,
  maxWidth: image.width,
  maxHeight: image.height,
});

const mapDispatchToProps = (dispatch) => ({
  onCancel() {
    dispatch(clearActiveTool());
  },

  onSubmit({x, y, width, height}) {
    dispatch(cropImage(x, y, width, height));
    dispatch(clearActiveTool());
  },

  onChange(data) {
    dispatch(updateToolData(data));
  },
});

module.exports = connect(
  mapStateToProps,
  mapDispatchToProps
)(CropToolbar);
