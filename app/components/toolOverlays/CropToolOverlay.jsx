const PropTypes = require('prop-types');
const React = require('react');

const {isSizeInRange, isPositiveCoordinate} = require('../../helpers/validators');

const ToolOverlay = require('../ToolOverlay');
const DragHandle = require('../DragHandle');

class CropToolOverlay extends React.Component {
  static propTypes = {
    cropX: PropTypes.any.isRequired,
    cropY: PropTypes.any.isRequired,
    cropWidth: PropTypes.any.isRequired,
    cropHeight: PropTypes.any.isRequired,
    maxWidth: PropTypes.number.isRequired,
    maxHeight: PropTypes.number.isRequired,

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
    const {cropX, cropY, cropWidth, cropHeight, maxWidth, maxHeight} = nextProps;
    const {x, y, width, height} = this.state;

    this.setState({
      x: isPositiveCoordinate(cropX) ? cropX : x,
      y: isPositiveCoordinate(cropY) ? cropY : y,
      width: isSizeInRange(cropWidth, maxWidth) ? cropWidth : width,
      height: isSizeInRange(cropHeight, maxHeight) ? cropHeight : height,
    });
  }

  deriveHandleBox = (handles) => {
    const {maxWidth, maxHeight} = this.props;
    const {minX, minY, maxX, maxY} = handles.reduce((acc, {x, y}) => ({
      minX: Math.max(0, Math.min(acc.minX, x)),
      minY: Math.max(0, Math.min(acc.minY, y)),
      maxX: Math.min(Math.max(acc.maxX, x), maxWidth),
      maxY: Math.min(Math.max(acc.maxY, y), maxHeight),
    }), {minX: Infinity, minY: Infinity, maxX: -Infinity, maxY: -Infinity});

    this.props.onChange({
      x: minX,
      y: minY,
      width: maxX - minX,
      height: maxY - minY,
    });
  }

  handleCoordinates = () => {
    const {x, y, width, height} = this.state;

    return [
      {x: x, y: y},
      {x: x + width, y: y},
      {x: x + width, y: y + height},
      {x: x, y: y + height},
    ];
  }

  render = () => {
    const {zoom} = this.props;

    const handles = this.handleCoordinates();

    return (
      <ToolOverlay {...this.props}>
        {handles.map(({x, y}, index) => (
          <DragHandle key={`h${x},${y}`}
            x={x * zoom} y={y * zoom}
            onChange={(dx, dy) => {
              // need to divide by the zoom so these values are correct
              dx = Math.round(dx / zoom);
              dy = Math.round(dy / zoom);
              const others = handles.filter((h, i) => i !== index);
              const updated = others.map((other) => ({
                x: other.x === x ? dx : other.x,
                y: other.y === y ? dy : other.y,
              }));
              this.deriveHandleBox([{x: dx, y: dy}, ...updated]);
            }} />
        ))}
      </ToolOverlay>
    );
  }
}

module.exports = CropToolOverlay;
