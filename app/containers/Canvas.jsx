const {connect} = require('react-redux');

const Canvas = require('../components/Canvas');

const mapStateToProps = ({page: {image}}) => ({
  image,
});

const mapDispatchToProps = (dispatch) => ({
});

module.exports = connect(
  mapStateToProps,
  mapDispatchToProps
)(Canvas);
