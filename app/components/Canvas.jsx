const React = require('react');

const {
  canvas: canvasClass,
  canvasNoImage,
} = require('../../scss/components/canvas.scss');

const Canvas = ({image}) => {
  if (image) {
    return (
      <canvas className={canvasClass} width={image.width} height={image.height}></canvas>
    );
  }
  else {
    return (
      <div className={canvasNoImage}>
        No image
      </div>
    );
  }
};

Canvas.propTypes = {
};

module.exports = Canvas;
