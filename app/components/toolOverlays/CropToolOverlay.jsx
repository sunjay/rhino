const React = require('react');

const {isSizeInRange, isPositiveCoordinate} = require('../../helpers/validators');

const ToolOverlay = require('../ToolOverlay');
const DragHandle = require('../DragHandle');

// The radius around a handle to accept drags
const HANDLE_RADIUS = 10; // px

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
      dragging: false,
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

  componentWillUnmount() {
    console.log('unmount');
    window.removeEventListener('mouseup', this.onMouseUp);
    window.removeEventListener('mousemove', this.onMouseMove);
  },

  onMouseDown({clientX, clientY}) {
    console.log('down');
    console.log(this.refs);
    this.setState({dragging: true});
    window.addEventListener('mouseup', this.onMouseUp);
    window.addEventListener('mousemove', this.onMouseMove);
  },

  onMouseUp() {
    console.log('up');
    this.setState({dragging: false});
    window.removeEventListener('mouseup', this.onMouseUp);
    window.removeEventListener('mousemove', this.onMouseMove);
  },

  onMouseMove({clientX, clientY}) {
    if (!this.state.dragging) {
      return;
    }

    console.log('move', clientX, clientY);
  },

  convertMouseToLocalPosition({clientX, clientY}) {
    // Need to get position local to the offset parent (the ToolOverlay)
    const {top, left} = this._overlay.getBoundingClientRect();
    console.log(top, left);
  },

  deriveHandleBox(handles) {
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
  },

  handleCoordinates() {
    const {x, y, width, height} = this.state;

    return [
      {x: x, y: y},
      {x: x + width, y: y},
      {x: x + width, y: y + height},
      {x: x, y: y + height},
    ];
  },

  render() {
    const {zoom, overlayWidth, overlayHeight, overlayOffsetX, overlayOffsetY} = this.props;

    const handles = this.handleCoordinates();

    return (
      <div ref={(node) => this._overlay = node}>
        <ToolOverlay overlayWidth={overlayWidth} overlayHeight={overlayHeight}
          overlayOffsetX={overlayOffsetX} overlayOffsetY={overlayOffsetY}
          onMouseDown={this.onMouseDown}>
          {handles.map(({x, y}, index) => (
            <DragHandle key={`h${x},${y}`}
              x={x * zoom} y={y * zoom}
              isDragging={false}
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
      </div>
    );
  },
});

module.exports = CropToolOverlay;
