const React = require('react');

const CropToolbar = require('../containers/toolbars/CropToolbar');

const ToolbarRouter = ({tool: {activeToolId}}) => {
  if (activeToolId === 'crop') {
    return (
      <CropToolbar />
    );
  }

  return (
    <div />
  );
};

ToolbarRouter.propTypes = {
  activeToolId: React.PropTypes.string,
};

module.exports = ToolbarRouter;
