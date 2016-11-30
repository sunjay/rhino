const React = require('react');
const classNames = require('classnames');

const {
  menuItem,
  menuItemRight,
} = require('../../scss/components/menuBar.scss');

const MenuItem = ({
  children,
  accelerator,
  className,
  ...props
}) => (
  <li {...props} className={classNames(menuItem, className)}>
    {children}
    {accelerator ?
      <span className={menuItemRight}>{accelerator.replace('CommandOrControl', 'Ctrl')}</span>
      : null
    }
  </li>
);

MenuItem.propTypes = {
  children: React.PropTypes.any,
  accelerator: React.PropTypes.string,
  className: React.PropTypes.string,
};

module.exports = MenuItem;
