const PropTypes = require('prop-types');
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
  activeToolId: PropTypes.string,
  zoom: PropTypes.number,
  // These are the dimensions and offset of the overlay
  // NOT the image currently in the editor
  width: PropTypes.number,
  height: PropTypes.number,
  offsetX: PropTypes.number,
  offsetY: PropTypes.number,
};

module.exports = ToolOverlayRouter;
