const React = require('react');

const {isSizeInRange, isPositiveCoordinate} = require('../../helpers/validators');

const ToolOverlay = require('../ToolOverlay');
const DraggableHandle = require('../../containers/DraggableHandle');
const DraggableHandleDragLayer = require('../../containers/DraggableHandleDragLayer');

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

    connectDropTarget: React.PropTypes.func.isRequired,
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

  onMouseMove({clientX, clientY}) {
    if (!this.state.dragging) {
      return;
    }

    const {top, left} = this._handle.getBoundingClientRect();
    const {x, y, onChange} = this.props;

    const dx = clientX - left + x;
    const dy = clientY - top + y;
    onChange(dx, dy);
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
    const {zoom, connectDropTarget} = this.props;

    const handles = this.handleCoordinates();

    return connectDropTarget(
      <ToolOverlay {...this.props}>
        {handles.map(({x, y}, index) => (
          <DraggableHandle key={`h${x},${y}`}
            x={x * zoom} y={y * zoom}
            onMouseDown={this.onMouseDown.bind(this, handles, index)}
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
        <DraggableHandleDragLayer />
      </ToolOverlay>
    );
  },
});

module.exports = CropToolOverlay;
