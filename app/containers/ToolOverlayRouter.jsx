const {connect} = require('react-redux');

const ToolOverlayRouter = require('../components/ToolOverlayRouter');

const mapStateToProps = ({page: {tool}}, ownProps) => ({
  tool,
  ...ownProps,
});

const mapDispatchToProps = (dispatch) => ({
});

module.exports = connect(
  mapStateToProps,
  mapDispatchToProps
)(ToolOverlayRouter);
