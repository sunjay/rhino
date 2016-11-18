const React = require('react');
const Icon = require('react-fontawesome').default;

const {
  toolbar,
} = require('../../scss/components/toolbar.scss');

const ToolbarButton = require('./ToolbarButton');

const Toolbar = () => (
  <div className={toolbar}>
    <ToolbarButton>
      <Icon name='plus-square-o' /> New
    </ToolbarButton>
    <ToolbarButton>
      <Icon name='file-o' /> Open
    </ToolbarButton>
    <ToolbarButton>
      <Icon name='floppy-o' /> Save
    </ToolbarButton>
  </div>
);

Toolbar.propTypes = {
};

module.exports = Toolbar;
