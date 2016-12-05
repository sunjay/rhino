const React = require('react');

const {isSizeInRange, isPositiveCoordinate} = require('../../helpers/validators');

const ToolOverlay = require('../ToolOverlay');

const CropToolOverlay = React.createClass({
  propTypes: {
    cropX: React.PropTypes.any.isRequired,
    cropY: React.PropTypes.any.isRequired,
    cropWidth: React.PropTypes.any.isRequired,
    cropHeight: React.PropTypes.any.isRequired,
    maxWidth: React.PropTypes.number.isRequired,
    maxHeight: React.PropTypes.number.isRequired,

    zoom: React.PropTypes.number.isRequired,
    overlayWidth: React.PropTypes.number.isRequired,
    overlayHeight: React.PropTypes.number.isRequired,
    overlayOffsetX: React.PropTypes.number.isRequired,
    overlayOffsetY: React.PropTypes.number.isRequired,
  },

  getInitialState() {
    // We keep an internal copy of the state in case
    // the user using the toolbar enters incorrect data
    // we can default to what we have in the state until
    // they correct their input
    return {
      x: this.props.cropX,
      y: this.props.cropY,
      width: this.props.cropWidth,
      height: this.props.cropHeight,
    };
  },

  componentWillReceiveProps(nextProps) {
    const {cropX, cropY, cropWidth, cropHeight, maxWidth, maxHeight} = nextProps;
    const {x, y, width, height} = this.state;

    this.setState({
      x: isPositiveCoordinate(cropX) ? cropX : x,
      y: isPositiveCoordinate(cropY) ? cropY : y,
      width: isSizeInRange(cropWidth, maxWidth) ? cropWidth : width,
      height: isSizeInRange(cropHeight, maxHeight) ? cropHeight : height,
    });
  },

  numberHandler(prop, event) {
    const value = parseFloat(event.target.value);
    this.props.onChange({[prop]: isNaN(value) ? '' : value});
  },

  render() {
    const {x, y, width, height} = this.state;
    const {zoom} = this.props;

    return (
      <ToolOverlay {...this.props}>
        {x}, {y}, {width}, {height}, {zoom}
      </ToolOverlay>
    );
  },
});

module.exports = CropToolOverlay;
