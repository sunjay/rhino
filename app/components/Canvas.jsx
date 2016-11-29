const React = require('react');

const ImageModel = require('../models/image');

const transparent = require('image-assets/transparent-bg.svg');
const transparentImage = new Image();
transparentImage.src = transparent;

const {
  canvasContainer,
  canvas: canvasClass,
  canvasNoImage,
} = require('../../scss/components/canvas.scss');

const Canvas = React.createClass({
  propTypes: {
    image: React.PropTypes.instanceOf(ImageModel),
  },

  componentWillMount() {
    //TODO: All of these will become props on a `view` store property in #44
    this._viewProps = {
      centerX: 0.5,
      centerY: 0.5,
      zoom: 1,
    };
  },

  componentDidMount() {
    this.forceUpdate();

    window.addEventListener('resize', this.onResize);
  },

  componentWillUnmount() {
    window.removeEventListener('resize', this.onResize);
  },

  onResize() {
    this.forceUpdate();
  },

  componentWillReceiveProps(nextProps) {
    const {image} = this.props;
    const {image: nextImage} = nextProps;

    if (image !== nextImage || (image && !image.equals(nextImage))) {
      if ((!image && nextImage) || (image && nextImage && image.path !== nextImage.path)) {
        //this.resetPanZoom(nextImage);
      }
    }
  },

  componentDidUpdate() {
    if (this._canvas && this.props.image) {
      this.draw();
    }
  },

  resetPanZoom(image) {
    //TODO: Implement this properly when implementing pan and zoom in #44

    const {canvasWidth, canvasHeight} = this.canvasDimensions();
    // When we initially load an image, we want to zoom in so that this
    // much of the canvas width or height is taken up
    const size = 0.8;

    const widthFactor = canvasWidth * size / image.width;
    const heightFactor = canvasHeight * size / image.height;

    this._viewProps = {
      centerX: 0.5,
      centerY: 0.5,
      // We take the minimum because we do not want the resulting
      // size to go over the canvas size
      zoom: Math.min(widthFactor, heightFactor),
    };
  },

  draw() {
    const canvas = this._canvas;
    const ctx = canvas.getContext('2d');

    const {image} = this.props;
    const {zoom} = this._viewProps;
    const {canvasWidth, canvasHeight} = this.canvasDimensions();

    // Always want to save the state so we can restore it at the end of this
    // method. This ensures we always have a clean context to work with.
    ctx.save();

    // Always clear the entire canvas before drawing
    ctx.clearRect(0, 0, canvasWidth, canvasHeight);

    const imageCanvas = this.createImage(image);

    const imageWidth = image.width * zoom;
    const imageHeight = image.height * zoom;

    const background = this.createTransparentBackground(imageWidth, imageHeight);

    ctx.drawImage(background, 0, 0);

    // need to scale offsets because everything is scaled by the call to scale()
    ctx.drawImage(imageCanvas, 0, 0, imageWidth, imageHeight);

    ctx.restore();
  },

  createImage(image) {
    const data = Uint8ClampedArray.from(image.data);
    const imageData = new ImageData(data, image.width, image.height);
    const canvas = document.createElement('canvas');
    canvas.width = image.width;
    canvas.height = image.height;
    const imageContext = canvas.getContext('2d');
    imageContext.putImageData(imageData, 0, 0);

    return canvas;
  },

  createTransparentBackground(width, height) {
    const canvas = document.createElement('canvas');
    canvas.width = width;
    canvas.height = height;

    const ctx = canvas.getContext('2d');
    ctx.fillStyle = ctx.createPattern(transparentImage, 'repeat');
    ctx.fillRect(0, 0, width, height);

    return canvas;
  },

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
  },

  renderImage(image) {
    const {centerX, centerY, zoom} = this._viewProps;
    const {canvasWidth, canvasHeight} = this.canvasDimensions();

    const canvasCenterX = centerX * canvasWidth;
    const canvasCenterY = centerY * canvasHeight;

    const imageWidth = image.width * zoom;
    const imageHeight = image.height * zoom;

    const offsetX = canvasCenterX - imageWidth / 2;
    const offsetY = canvasCenterY - imageHeight / 2;

    return (
      <canvas ref={(node) => this._canvas = node}
        width={image.width * zoom} height={image.height * zoom}
        style={{left: offsetX, top: offsetY}} className={canvasClass} />
    );
  },

  canvasDimensions() {
    const {
      offsetWidth: canvasWidth = 0,
      offsetHeight: canvasHeight = 0,
    } = this._container;

    return {
      canvasWidth,
      canvasHeight,
    };
  },
});

Canvas.propTypes = {
};

module.exports = Canvas;
