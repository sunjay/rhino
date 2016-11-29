const React = require('react');

const Navbar = require('./Navbar');

const {menuBar} = require('../../scss/components/menuBar.scss');

const MenuBar = () => (
  <Navbar className={menuBar}>
    <span>Foo</span>
  </Navbar>
);

MenuBar.propTypes = {
};

module.exports = MenuBar;
