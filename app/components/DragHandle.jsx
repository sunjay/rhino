const React = require('react');
const classNames = require('classnames');
const {getEmptyImage} = require('react-dnd-html5-backend');

const {
  dragHandleContainer,
  dragHandle,
  dragHandleDragging,
} = require('../../scss/components/dragHandle.scss');

// A drag handle usually used for resize and crop actions
const DragHandle = React.createClass({
  propTypes: {
    x: React.PropTypes.number.isRequired,
    y: React.PropTypes.number.isRequired,

    isDragging: React.PropTypes.bool.isRequired,
    connectDragSource: React.PropTypes.func.isRequired,
    connectDragPreview: React.PropTypes.func.isRequired,
  },

  componentDidMount() {
    this.props.connectDragPreview(getEmptyImage());
  },

  render() {
    const {x, y, isDragging, connectDragSource} = this.props;
    return connectDragSource(
      <div className={dragHandleContainer} style={{left: x, top: y}}>
        <div className={classNames({
          [dragHandle]: true,
          [dragHandleDragging]: isDragging,
        })} />
      </div>
    );
  },
});

module.exports = DragHandle;
