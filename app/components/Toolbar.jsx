const React = require('react');
const Icon = require('react-fontawesome').default;

const {
  toolbar,
} = require('../../scss/components/toolbar.scss');

const ToolbarButton = require('./ToolbarButton');

const Toolbar = () => (
  <div className={toolbar}>
    <ToolbarButton>
      <Icon name='file-o' />
    </ToolbarButton>
  </div>
);

Toolbar.propTypes = {
};

module.exports = Toolbar;
