const React = require('react');

const Image = require('../models/image');

const transparentPattern = require('base64-image!image-assets/transparent-bg.png');

const {
  canvas: canvasClass,
} = require('../../scss/components/canvas.scss');

const Canvas = React.createClass({
  propTypes: {
    image: React.PropTypes.instanceOf(Image),
  },

  shouldComponentUpdate() {
    // We never want react to compare props for us since these props can be
    // pretty huge and we never really need react to re-render anything
    // after the first time
    return false;
  },

  componentDidMount() {
    // Need to wait briefly for the layout to finish so the updated
    // dimensions are correct
    setTimeout(() => {
      this.updateDimensions();
      this.draw();
    }, 1);

    window.addEventListener('resize', () => {
      this.updateDimensions();
      this.draw();
    });
  },

  componentWillUnmount() {
    window.removeEventListener('resize', this.draw);
  },

  componentWillReceiveProps(nextProps) {
    const {image} = this.props;
    const {image: nextImage} = nextProps;

    if (image !== nextImage || (image && !image.equals(nextImage))) {
      if (!image || !nextImage || image.path !== nextImage.path) {
        this.resetPanZoom();
      }
      this.draw();
    }
  },

  updateDimensions() {
    this._canvas.width = this._canvas.scrollWidth;
    this._canvas.height = this._canvas.scrollHeight;
  },

  resetPanZoom() {
    //TODO: Implement this when implementing pan and zoom
  },

  draw() {
    const canvas = this._canvas;
    const {width, height} = canvas;
    const ctx = canvas.getContext('2d');
    const {image} = this.props;

    // Always clear the entire canvas before drawing
    ctx.clearRect(0, 0, width, height);

    if (!image) {
      ctx.fillStyle = '#aaa';
      ctx.font = '46px sans-serif';
      ctx.textBaseline = 'middle';
      ctx.textAlign = 'center';

      ctx.fillText('No Image Loaded', width / 2, height / 2);
    }
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
