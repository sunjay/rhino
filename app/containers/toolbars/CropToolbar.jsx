const {connect} = require('react-redux');

const CropToolbar = require('../../components/toolbars/CropToolbar');

const mapStateToProps = ({page: {tool}}) => ({
  ...tool.data,
});

const mapDispatchToProps = (dispatch) => ({
});

module.exports = connect(
  mapStateToProps,
  mapDispatchToProps
)(CropToolbar);
