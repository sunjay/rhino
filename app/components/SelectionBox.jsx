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
    onChange: PropTypes.func.isRequired,

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
  };

  /*TODO: Figure out a proper implementation of the draggable selection box
  // Used to store the original top left and bottom right anchor points of the
  // rectangle
  // Each of these is an object with shape {x, y}
  // If either x is null, the current mouse x coordinate will be used in its place
  // If either y is null, the current mouse y coordinate will be used in its place
  //
  // That makes it possible to express any of the resize handles and calculate
  // the correct {x, y, width, height} box from that
  anchorTL = null;
  anchorBR = null;
  // When moving, we want to anchor the box from the top left corner so that the
  // top left corner always stays a fixed amount away from the current mouse
  // position
  anchorMove = null;

  componentDidMount() {
    window.addEventListener('mousemove', this.mousemove);
    window.addEventListener('mouseup', this.mouseup);
  }

  componentWillUnmount() {
    window.removeEventListener('mousemove', this.mousemove);
    window.removeEventListener('mouseup', this.mouseup);
  }

  startMove = (event) => {
    const {x: mouseX, y: mouseY} = this.mouseRelativeToOffsetParent(event);
    const {offsetLeft, offsetTop} = this.selectionBox;

    this.anchorMove = {
      x: mouseX - offsetLeft,
      y: mouseY - offsetTop,
    };

    console.log('startMove', this.anchorMove);
  }

  // Starts the drag and specifies which sides are being dragged
  mousedown = (event, {top, bottom, left, right}) => {
    // stop propogation so this doesn't accidentally trigger the parent element
    event.stopPropagation();

    const {x, y, width, height} = this.props;

    this.anchorTL = {
      x: !left ? x : null,
      y: !top ? y : null,
    };
    this.anchorBR = {
      x: !right ? x + width : null,
      y: !bottom ? y + height : null,
    };

    console.log('mousedown', this.anchorTL, this.anchorBR);
  }

  mousemove = (event) => {
    const {x: mouseX, y: mouseY} = this.mouseRelativeToOffsetParent(event);

    if (this.anchorTL && this.anchorBR) {
      console.log('mousemove2');
      const x1 = Math.floor(this.anchorTL.x === null ? mouseX : this.anchorTL.x);
      const y1 = Math.floor(this.anchorTL.y === null ? mouseY : this.anchorTL.y);
      const x2 = Math.floor(this.anchorBR.x === null ? mouseX : this.anchorBR.x);
      const y2 = Math.floor(this.anchorBR.y === null ? mouseY : this.anchorBR.y);

      const x = Math.min(x1, x2);
      const y = Math.min(y1, y2);
      const width = Math.abs(x1 - x2);
      const height = Math.abs(y1 - y2);

      this.props.onChange({x, y, width, height});
    }
    else if (this.anchorMove) {
      //console.log('mousemove', {mouseX, mouseY}, this.anchorMove);
      console.log('mousemove');
      const {width, height} = this.props;
      this.props.onChange({
        x: mouseX - this.anchorMove.x,
        y: mouseY - this.anchorMove.y,
        width,
        height,
      });
    }
  }

  mouseup = () => {
    this.anchorTL = null;
    this.anchorBR = null;
    this.anchorMove = null;
    console.log('mouseup');
  }

  mouseRelativeToOffsetParent = (event) => {
    const offset = this.selectionBox.offsetParent.getBoundingClientRect();
    const x = event.clientX - offset.left;
    const y = event.clientY - offset.top;

    return {x, y};
  }
  */

  render = () => {
    const {x, y, width, height, z, className, handleClasses} = this.props;

    return (
      <div ref={(node) => this.selectionBox = node}
        onMouseDown={this.startMove}
        className={classNames(selectionBox, className)}
        style={{
          left: x,
          top: y,
          width: width,
          height: height,
          zIndex: z,
        }}
      >
        {/*
        <div style={{zIndex: z + 2}}
          onMouseDown={(event) => this.mousedown(event, {top: true, left: true})}
          className={classNames(handleTopLeft, handleClasses.topLeft)} />
        <div style={{zIndex: z + 2}}
          onMouseDown={(event) => this.mousedown(event, {top: true, right: true})}
          className={classNames(handleTopRight, handleClasses.topRight)} />
        <div style={{zIndex: z + 2}}
          onMouseDown={(event) => this.mousedown(event, {bottom: true, left: true})}
          className={classNames(handleBottomLeft, handleClasses.bottomLeft)} />
        <div style={{zIndex: z + 2}}
          onMouseDown={(event) => this.mousedown(event, {bottom: true, right: true})}
          className={classNames(handleBottomRight, handleClasses.bottomRight)} />
        */}
        <div style={{zIndex: z + 1}}
          onMouseDown={() => {}/*(event) => this.mousedown(event, {top: true})*/}
          className={classNames(handleTop, handleClasses.top)} />
        <div style={{zIndex: z + 1}}
          onMouseDown={() => {}/*(event) => this.mousedown(event, {right: true})*/}
          className={classNames(handleRight, handleClasses.right)} />
        <div style={{zIndex: z + 1}}
          onMouseDown={() => {}/*(event) => this.mousedown(event, {bottom: true})*/}
          className={classNames(handleBottom, handleClasses.bottom)} />
        <div style={{zIndex: z + 1}}
          onMouseDown={() => {}/*(event) => this.mousedown(event, {left: true})*/}
          className={classNames(handleLeft, handleClasses.left)} />
      </div>
    );
  }
}

module.exports = SelectionBox;
