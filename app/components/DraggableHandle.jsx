const React = require('react');

const {
  draggableHandleContainer,
  draggableHandle,
  draggableHandleDragging,
} = require('../../scss/components/draggableHandle.scss');

// A draggable handle usually used for resize and crop actions
const DraggableHandle = ({x, y, onChange}) => (
  <div className={draggableHandleContainer}
    style={{left: x, top: y}}>
    <div className={draggableHandle}>
    </div>
  </div>
);

DraggableHandle.propTypes = {
  x: React.PropTypes.number.isRequired,
  y: React.PropTypes.number.isRequired,
  onChange: React.PropTypes.func,
};

module.exports = DraggableHandle;
