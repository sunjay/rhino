const React = require('react');

const {
  menuSeparator,
} = require('../../scss/components/menuBar.scss');

const MenuSeparator = () => (
  <li className={menuSeparator}></li>
);

MenuSeparator.propTypes = {
};

module.exports = MenuSeparator;
