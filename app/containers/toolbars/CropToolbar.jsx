const {connect} = require('react-redux');

const CropToolbar = require('../../components/toolbars/CropToolbar');

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

  onChange(data) {
    dispatch(updateToolData(data));
  },
});

module.exports = connect(
  mapStateToProps,
  mapDispatchToProps
)(CropToolbar);
