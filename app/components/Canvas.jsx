const React = require('react');

const {canvas: canvasClass} = require('../../scss/components/canvas.scss');

const Canvas = ({image}) => (
  <canvas className={canvasClass} width={image.width} height={image.height}></canvas>
);

Canvas.propTypes = {
};

module.exports = Canvas;
