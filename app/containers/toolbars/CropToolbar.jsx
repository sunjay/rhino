const {connect} = require('react-redux');

const CropToolbar = require('../../components/toolbars/CropToolbar');

const {
  cropImage,
} = require('../../actions/ImageActions');

const {
  processRemotely,
} = require('../../actions/WindowActions');

const {
  activateTool,
  updateToolData,
} = require('../../actions/ToolActions');

const mapStateToProps = ({page: {tool: {data}}}) => ({
  ...data,
});

const mapDispatchToProps = (dispatch) => ({
  onCancel() {
    dispatch(processRemotely(activateTool('crop')));
  },

  onSubmit({x, y, width, height}) {
    dispatch(cropImage(x, y, width, height));
  },

  onChange(data) {
    dispatch(updateToolData(data));
  },
});

module.exports = connect(
  mapStateToProps,
  mapDispatchToProps
)(CropToolbar);
