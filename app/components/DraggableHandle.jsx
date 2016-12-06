const React = require('react');

const {
  draggableHandleContainer,
  draggableHandle,
  draggableHandleDragging,
} = require('../../scss/components/draggableHandle.scss');

// A draggable handle usually used for resize and crop actions
const DraggableHandle = React.createClass({
  propTypes: {
    x: React.PropTypes.number.isRequired,
    y: React.PropTypes.number.isRequired,
    onChange: React.PropTypes.func,
  },

  getInitialState() {
    return {
      dragging: false,
    };
  },

  onMouseDown() {
    this.setState({dragging: true});
    window.addEventListener('mouseup', this.onMouseUp);
    window.addEventListener('mousemove', this.onMouseMove);
  },

  onMouseUp() {
    this.setState({dragging: false});
    window.removeEventListener('mouseup', this.onMouseUp);
    window.removeEventListener('mousemove', this.onMouseMove);
  },

  componentWillUnmount() {
    window.removeEventListener('mouseup', this.onMouseUp);
    window.removeEventListener('mousemove', this.onMouseMove);
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

  render() {
    const {x, y} = this.props;

    return (
      <div className={draggableHandleContainer}
        onMouseDown={this.onMouseDown}
        ref={(node) => this._handle = node}
        style={{left: x, top: y}}>
        <div className={draggableHandle} />
      </div>
    );
  },
});

module.exports = DraggableHandle;
