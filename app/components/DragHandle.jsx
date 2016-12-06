const React = require('react');
const classNames = require('classnames');

const {
  dragHandleContainer,
  dragHandle,
  dragHandleDragging,
} = require('../../scss/components/dragHandle.scss');

// A drag handle usually used for resize and crop actions
const DragHandle = ({x, y, isDragging}) => (
  <div className={dragHandleContainer}
    style={{left: x, top: y}}>
    <div className={classNames({
      [dragHandle]: true,
      [dragHandleDragging]: isDragging,
    })} />
  </div>
);

DragHandle.propTypes = {
  x: React.PropTypes.number.isRequired,
  y: React.PropTypes.number.isRequired,
  isDragging: React.PropTypes.bool.isRequired,
};

module.exports = DragHandle;
