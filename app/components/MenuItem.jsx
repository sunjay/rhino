const PropTypes = require('prop-types');
const React = require('react');
const classNames = require('classnames');

const {
  menuItem,
  menuItemRight,
  menuItemDisabled,
} = require('../../scss/components/menuBar.scss');

const MenuItem = ({
  label,
  accelerator,
  className,
  disabled = false,
  ...props
}) => (
  <li {...props} className={classNames({
    [menuItem]: true,
    [menuItemDisabled]: disabled,
  }, className)}>
    {label}
    {accelerator ?
      <span className={menuItemRight}>{accelerator.replace('CommandOrControl', 'Ctrl')}</span>
      : null
    }
  </li>
);

MenuItem.propTypes = {
  label: PropTypes.node,
  accelerator: PropTypes.string,
  className: PropTypes.string,
  disabled: PropTypes.bool,
};

module.exports = MenuItem;
