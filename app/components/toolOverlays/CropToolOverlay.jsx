const PropTypes = require('prop-types');
const React = require('react');

const {isSizeInRange, isPositiveCoordinate} = require('../../helpers/validators');

const ToolOverlay = require('../ToolOverlay');
const SelectionBox = require('../SelectionBox');

const {
  cropOverlay,
  cropOverlayContainer,
} = require('../../../scss/components/cropOverlay.scss');

class CropToolOverlay extends React.Component {
  static propTypes = {
    cropX: PropTypes.any.isRequired,
    cropY: PropTypes.any.isRequired,
    cropWidth: PropTypes.any.isRequired,
    cropHeight: PropTypes.any.isRequired,
    maxWidth: PropTypes.number.isRequired,
    maxHeight: PropTypes.number.isRequired,
    onChange: PropTypes.func.isRequired,

    zoom: PropTypes.number.isRequired,
    overlayWidth: PropTypes.number.isRequired,
    overlayHeight: PropTypes.number.isRequired,
    overlayOffsetX: PropTypes.number.isRequired,
    overlayOffsetY: PropTypes.number.isRequired,
  };

  // We keep an internal copy of the state in case
  // the user using the toolbar enters incorrect data
  // we can default to what we have in the state until
  // they correct their input
  state = {
    x: this.props.cropX,
    y: this.props.cropY,
    width: this.props.cropWidth,
    height: this.props.cropHeight,
  };

  componentWillReceiveProps = (nextProps) => {
    const {
      cropX: x,
      cropY: y,
      cropWidth: width,
      cropHeight: height,
      maxWidth,
      maxHeight,
    } = nextProps;

    this.setState(this.validate({x, y, width, height, maxWidth, maxHeight}));
  }

  onChange = ({x, y, width, height}) => {
    const {onChange, zoom} = this.props;

    onChange(this.validate({
      x: Math.ceil(x / zoom),
      y: Math.ceil(y / zoom),
      width: Math.ceil(width / zoom),
      height: Math.ceil(height / zoom),
    }));
  }

  // Validates the given updated values and returns valid versions of them by
  // making any adjustments necessary
  validate = (updated) => {
    const maxWidth = updated.maxWidth || this.props.maxWidth;
    const maxHeight = updated.maxHeight || this.props.maxHeight;
    let {x, y, width, height} = updated;

    // Only update an axis if it results in valid state
    if (!isPositiveCoordinate(x) || !isSizeInRange(x + width, maxWidth)) {
      x = Math.max(0, this.state.x);
      width = Math.min(this.state.width, maxWidth - x);
    }
    if (!isPositiveCoordinate(y) || !isSizeInRange(y + height, maxHeight)) {
      y = Math.max(0, this.state.y);
      height = Math.max(this.state.height, maxHeight - y);
    }

    return {x, y, width, height};
  }

  render = () => {
    const {zoom} = this.props;
    let {x, y, width, height} = this.state;
    x *= zoom;
    y *= zoom;
    width *= zoom;
    height *= zoom;

    return (
      <ToolOverlay {...this.props} className={cropOverlayContainer}>
        <SelectionBox className={cropOverlay} onChange={this.onChange}
          x={x} y={y} width={width} height={height} />
      </ToolOverlay>
    );
  }
}

module.exports = CropToolOverlay;
