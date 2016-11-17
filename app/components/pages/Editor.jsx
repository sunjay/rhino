const React = require('react');

const Canvas = require('../../containers/Canvas');
const Toolbar = require('../../containers/Toolbar');
const ToolsPanel = require('../../containers/ToolsPanel');

const Editor = () => (
  <div>
    <Toolbar />
    <ToolsPanel />
    <Canvas />
  </div>
);

module.exports = Editor;
