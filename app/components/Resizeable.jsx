const PropTypes = require('prop-types');
const React = require('react');
const classNames = require('classnames');
const ResizeableBox = require('react-resizable-box').default;

const {
  resizeable,
  resizeableHandle,
  handleTopLeft,
  handleTopRight,
  handleBottomRight,
  handleBottomLeft,
} = require('../../scss/components/resizeable.scss');

class Resizeable extends React.Component {
  static propTypes = {
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
    onResize: PropTypes.func,
    children: PropTypes.any,
    className: PropTypes.string,
  };

  static defaultProps = {
    onResize() {},
  };

  state = {
    width: this.props.width,
    height: this.props.height,
  };

  componentWillReceiveProps = (nextProps) => {
    const {width, height} = nextProps;
    if (width !== this.state.width || height !== this.state.height) {
      this.resizeBox.updateSize({width, height});
      this.setState({width, height});
    }
  }

  onResize = (event, direction, ref, delta) => {
    const width = this.state.width + delta.width;
    const height = this.state.height + delta.height;

    this.setState({width, height});
    this.props.onResize(event, {width, height});
  }

  render = () => {
    const {children, className, ...props} = this.props;
    const {width, height} = this.state;

    return (
      <ResizeableBox {...props} ref={(node) => this.resizeBox = node}
        className={classNames(resizeable, className)}
        handlerClasses={{
          topLeft: classNames(resizeableHandle, handleTopLeft),
          topRight: classNames(resizeableHandle, handleTopRight),
          bottomRight: classNames(resizeableHandle, handleBottomRight),
          bottomLeft: classNames(resizeableHandle, handleBottomLeft),
        }}
        width={width} height={height}
        onResize={this.onResize}>
        {children}
      </ResizeableBox>
    );
  }
}

module.exports = Resizeable;
