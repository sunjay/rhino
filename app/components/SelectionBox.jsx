const PropTypes = require('prop-types');
const React = require('react');
const classNames = require('classnames');

const {
  selectionBox,
  handleTopLeft,
  handleTopRight,
  handleBottomLeft,
  handleBottomRight,
  handleTop,
  handleRight,
  handleBottom,
  handleLeft,
} = require('../../scss/components/selectionBox.scss');

class SelectionBox extends React.Component {
  static propTypes = {
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired,
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,

    // z-index
    z: PropTypes.number.isRequired,

    className: PropTypes.string,
    handleClasses: PropTypes.shape({
      topLeft: PropTypes.string,
      topRight: PropTypes.string,
      bottomLeft: PropTypes.string,
      bottomRight: PropTypes.string,
      top: PropTypes.string,
      right: PropTypes.string,
      bottom: PropTypes.string,
      left: PropTypes.string,
    }),
  };

  static defaultProps = {
    z: 100,
    handleClasses: {},
  }

  render = () => {
    const {x, y, width, height, z, className, handleClasses} = this.props;

    return (
      <div className={classNames(selectionBox, className)} style={{
        left: x,
        top: y,
        width: width,
        height: height,
        zIndex: z,
      }}>
        <div style={{zIndex: z + 2}} className={classNames(handleTopLeft, handleClasses.topLeft)} />
        <div style={{zIndex: z + 2}} className={classNames(handleTopRight, handleClasses.topRight)} />
        <div style={{zIndex: z + 2}} className={classNames(handleBottomLeft, handleClasses.bottomLeft)} />
        <div style={{zIndex: z + 2}} className={classNames(handleBottomRight, handleClasses.bottomRight)} />
        <div style={{zIndex: z + 1}} className={classNames(handleTop, handleClasses.top)} />
        <div style={{zIndex: z + 1}} className={classNames(handleRight, handleClasses.right)} />
        <div style={{zIndex: z + 1}} className={classNames(handleBottom, handleClasses.bottom)} />
        <div style={{zIndex: z + 1}} className={classNames(handleLeft, handleClasses.left)} />
      </div>
    );
  }
}

module.exports = SelectionBox;
