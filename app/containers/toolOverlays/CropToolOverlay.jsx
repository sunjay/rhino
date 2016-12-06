const {connect} = require('react-redux');
const {DropTarget} = require('react-dnd');

const {TYPES} = require('../../constants/dnd');

const CropToolOverlay = require('../../components/toolOverlays/CropToolOverlay');

const {
  updateToolData,
} = require('../../actions/ToolActions');

const mapStateToProps = ({page: {image, tool: {data}}}, ownProps) => ({
  cropX: data.x,
  cropY: data.y,
  cropWidth: data.width,
  cropHeight: data.height,
  maxWidth: image.width,
  maxHeight: image.height,
  ...ownProps,
});

const mapDispatchToProps = (dispatch) => ({
  onChange(data) {
    dispatch(updateToolData(data));
  },
});

module.exports = connect(
  mapStateToProps,
  mapDispatchToProps
)(DropTarget(TYPES.CROP, {}, (connect) => ({
  connectDropTarget: connect.dropTarget(),
}))(CropToolOverlay));
