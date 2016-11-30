const React = require('react');
const classNames = require('classnames');

const {
  menuItem,
  menuItemRight,
} = require('../../scss/components/menuBar.scss');

const MenuItem = ({
  label,
  accelerator,
  className,
  ...props
}) => (
  <li {...props} className={classNames(menuItem, className)}>
    {label}
    {accelerator ?
      <span className={menuItemRight}>{accelerator.replace('CommandOrControl', 'Ctrl')}</span>
      : null
    }
  </li>
);

MenuItem.propTypes = {
  label: React.PropTypes.node,
  accelerator: React.PropTypes.string,
  className: React.PropTypes.string,
};

module.exports = MenuItem;
