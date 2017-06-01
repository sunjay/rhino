const PropTypes = require('prop-types');
const React = require('react');
const classNames = require('classnames');

const {toolOverlay} = require('../../scss/components/toolOverlay.scss');

const ToolOverlay = ({
  className,
  children,
  overlayWidth,
  overlayHeight,
  overlayOffsetX,
  overlayOffsetY,
}) => (
  <div className={classNames(toolOverlay, className)}
    style={{
      width: overlayWidth,
      height: overlayHeight,
      left: overlayOffsetX,
      top: overlayOffsetY,
    }}>
    {children}
  </div>
);

ToolOverlay.propTypes = {
  overlayWidth: PropTypes.number.isRequired,
  overlayHeight: PropTypes.number.isRequired,
  overlayOffsetX: PropTypes.number.isRequired,
  overlayOffsetY: PropTypes.number.isRequired,
  className: PropTypes.string,
  children: PropTypes.any,
};

module.exports = ToolOverlay;
