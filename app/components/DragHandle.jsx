const PropTypes = require('prop-types');
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
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
  isDragging: PropTypes.bool.isRequired,
};

module.exports = DragHandle;
