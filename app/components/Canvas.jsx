const React = require('react');

const ImageModel = require('../models/image');

const transparent = require('image-assets/transparent-bg.svg');
const transparentImage = new Image();
transparentImage.src = transparent;

const {
  canvas: canvasClass,
} = require('../../scss/components/canvas.scss');

const Canvas = React.createClass({
  propTypes: {
    image: React.PropTypes.instanceOf(ImageModel),
  },

  shouldComponentUpdate() {
    // We never want react to compare props for us since these props can be
    // pretty huge and we never really need react to re-render anything
    // after the first time
    return false;
  },

  componentDidMount() {
    //TODO: All of these will become props on a `view` store property in #44
    this._viewProps = {
      centerX: 0.5,
      centerY: 0.5,
      zoom: 1,
    };

    // Need to wait briefly for the layout to finish so the updated
    // dimensions are correct
    setTimeout(() => {
      this.updateDimensions();
      this.draw();
    }, 1);

    window.addEventListener('resize', this.onResize);
  },

  componentWillUnmount() {
    window.removeEventListener('resize', this.onResize);
  },

  onResize() {
    this.updateDimensions();
    this.draw();
  },

  componentWillReceiveProps(nextProps) {
    const {image} = this.props;
    const {image: nextImage} = nextProps;

    if (image !== nextImage || (image && !image.equals(nextImage))) {
      if (!image || !nextImage || image.path !== nextImage.path) {
        this.resetPanZoom(nextImage);
      }

      this.draw(nextProps);
    }
  },

  updateDimensions() {
    this._canvas.width = this._canvas.scrollWidth;
    this._canvas.height = this._canvas.scrollHeight;
  },

  resetPanZoom(image) {
    //TODO: Implement this properly when implementing pan and zoom in #44

    const {width: canvasWidth, height: canvasHeight} = this._canvas;
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

  draw(props = this.props) {
    const canvas = this._canvas;
    const {width: canvasWidth, height: canvasHeight} = canvas;
    const ctx = canvas.getContext('2d');
    const {image, centerX, centerY, zoom} = {...props, ...this._viewProps};

    // Always clear the entire canvas before drawing
    ctx.save();
    ctx.clearRect(0, 0, canvasWidth, canvasHeight);

    if (!image) {
      ctx.fillStyle = '#aaa';
      ctx.font = '46px sans-serif';
      ctx.textBaseline = 'middle';
      ctx.textAlign = 'center';

      ctx.fillText('No Image Loaded', canvasWidth / 2, canvasHeight / 2);
      return;
    }

    const imageCanvas = this.createImage(image);

    const imageWidth = image.width * zoom;
    const imageHeight = image.height * zoom;

    const canvasCenterX = centerX * canvasWidth;
    const canvasCenterY = centerY * canvasHeight;

    const offsetX = canvasCenterX - imageWidth / 2;
    const offsetY = canvasCenterY - imageHeight / 2;

    const background = this.createTransparentBackground(imageWidth, imageHeight);

    ctx.drawImage(background, offsetX, offsetY);
    ctx.lineWidth = 1;
    ctx.strokeStyle = '#aaa';
    ctx.strokeRect(offsetX, offsetY, imageWidth, imageHeight);

    ctx.scale(zoom, zoom);
    // need to scale offsets because everything is scaled by the call to scale()
    ctx.drawImage(imageCanvas, offsetX / zoom, offsetY / zoom);
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
    return (
      <canvas ref={(node) => this._canvas = node} className={canvasClass} />
    );
  },
});

Canvas.propTypes = {
};

module.exports = Canvas;
