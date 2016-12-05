const React = require('react');

const CropToolOverlay = require('../containers/toolOverlays/CropToolOverlay');

const ToolOverlayRouter = ({
  tool: {activeToolId},
  zoom,
  width,
  height,
  offsetX,
  offsetY,
}) => {
  if (activeToolId === 'crop') {
    return (
      <CropToolOverlay zoom={zoom} overlayWidth={width} overlayHeight={height}
        overlayOffsetX={offsetX} overlayOffsetY={offsetY} />
    );
  }

  return (
    <div />
  );
};

ToolOverlayRouter.propTypes = {
  activeToolId: React.PropTypes.string,
  zoom: React.PropTypes.number,
  // These are the dimensions and offset of the overlay
  // NOT the image currently in the editor
  width: React.PropTypes.number,
  height: React.PropTypes.number,
  offsetX: React.PropTypes.number,
  offsetY: React.PropTypes.number,
};

module.exports = ToolOverlayRouter;
