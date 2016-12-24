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
  ...props
}) => (
  <div {...props}
    className={classNames(toolOverlay, className)}
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
  overlayWidth: React.PropTypes.number.isRequired,
  overlayHeight: React.PropTypes.number.isRequired,
  overlayOffsetX: React.PropTypes.number.isRequired,
  overlayOffsetY: React.PropTypes.number.isRequired,
  className: React.PropTypes.string,
  children: React.PropTypes.any,
};

module.exports = ToolOverlay;
