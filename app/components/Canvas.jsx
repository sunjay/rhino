const PropTypes = require('prop-types');
const React = require('react');

const ImageModel = require('../models/image');

const ToolOverlayRouter = require('../containers/ToolOverlayRouter');

const {
  canvasContainer,
  canvas: canvasClass,
  canvasNoImage,
} = require('../../scss/components/canvas.scss');

class Canvas extends React.Component {
  static propTypes = {
    image: PropTypes.instanceOf(ImageModel),
    view: PropTypes.object.isRequired,
  };

  componentDidMount() {
    this.forceUpdate();

    window.addEventListener('resize', this.onResize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.onResize);
  }

  onResize = () => {
    this.forceUpdate();
  };

  componentDidUpdate() {
    if (this._canvas && this.props.image) {
      this.draw();
    }
  }

  draw = () => {
    const canvas = this._canvas;
    const ctx = canvas.getContext('2d');

    const {image} = this.props;
    const zoom = this.zoom(image);
    const {canvasWidth, canvasHeight} = this.canvasDimensions();

    // Always want to save the state so we can restore it at the end of this
    // method. This ensures we always have a clean context to work with.
    ctx.save();

    // Always clear the entire canvas before drawing
    ctx.clearRect(0, 0, canvasWidth, canvasHeight);

    const imageCanvas = this.createImageCanvas(image);

    const imageWidth = image.width * zoom;
    const imageHeight = image.height * zoom;

    // drawImage will automatically scale the image to the desired zoom level
    // because of the imageWidth and imageHeight parameters
    ctx.drawImage(imageCanvas, 0, 0, imageWidth, imageHeight);

    ctx.restore();
  };

  createImageCanvas = (image) => {
    const data = Uint8ClampedArray.from(image.data);
    const imageData = new ImageData(data, image.width, image.height);
    const canvas = document.createElement('canvas');
    canvas.width = image.width;
    canvas.height = image.height;
    const imageContext = canvas.getContext('2d');
    imageContext.putImageData(imageData, 0, 0);

    return canvas;
  };

  render() {
    const {image} = this.props;

    return (
      <div className={canvasContainer} ref={(node) => this._container = node}>
        {image ? (
          this.renderImage(image)
        ) : (
          <div className={canvasNoImage}>No Image Loaded</div>
        )}
      </div>
    );
  }

  renderImage = (image) => {
    const zoom = this.zoom(image);
    const {centerX, centerY} = this.props.view;
    const {canvasWidth, canvasHeight} = this.canvasDimensions();

    const canvasCenterX = centerX * canvasWidth;
    const canvasCenterY = centerY * canvasHeight;

    const imageWidth = image.width * zoom;
    const imageHeight = image.height * zoom;

    const offsetX = canvasCenterX - imageWidth / 2;
    const offsetY = canvasCenterY - imageHeight / 2;

    return [(
      <canvas key='canvas' ref={(node) => this._canvas = node}
        width={imageWidth} height={imageHeight}
        style={{left: offsetX, top: offsetY}}
        className={canvasClass} />
    ), (
      <ToolOverlayRouter key='overlay' zoom={zoom}
        width={imageWidth} height={imageHeight}
        offsetX={offsetX} offsetY={offsetY} />
    )];
  };

  zoom = (image) => {
    // When we initially load an image, we want to zoom in so that this
    // much of the canvas width or height is taken up
    const size = 0.8;
    const {canvasWidth, canvasHeight} = this.canvasDimensions();

    const widthFactor = canvasWidth * size / image.width;
    const heightFactor = canvasHeight * size / image.height;

    const factor = Math.min(widthFactor, heightFactor);

    const {zoom} = this.props.view;
    return zoom * factor;
  };

  canvasDimensions = () => {
    const {
      offsetWidth: canvasWidth = 0,
      offsetHeight: canvasHeight = 0,
    } = this._container;

    return {
      canvasWidth,
      canvasHeight,
    };
  };
}

module.exports = Canvas;
