const React = require('react');

const {
  menuItem,
} = require('../../scss/components/menuBar.scss');

const MenuItem = ({
  children,
}) => (
  <li className={menuItem}>
    {children}
  </li>
);

MenuItem.propTypes = {
  children: React.PropTypes.any,
};

module.exports = MenuItem;
