const {connect} = require('react-redux');

const ToolbarRouter = require('../components/ToolbarRouter');

const mapStateToProps = ({page: {tool}}) => ({
  tool,
});

const mapDispatchToProps = (dispatch) => ({
});

module.exports = connect(
  mapStateToProps,
  mapDispatchToProps
)(ToolbarRouter);
