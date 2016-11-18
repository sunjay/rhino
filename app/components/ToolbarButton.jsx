const React = require('react');
const classNames = require('classnames');

const {
  toolbarButton,
} = require('../../scss/components/toolbar.scss');

const Button = require('./Button');

const ToolbarButton = ({...props, className, children}) => (
  <Button  {...props} style='dark' size='sm' className={classNames(toolbarButton, className)}>
    {children}
  </Button>
);

ToolbarButton.propTypes = {
};

module.exports = ToolbarButton;
