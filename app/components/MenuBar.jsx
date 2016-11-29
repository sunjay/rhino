const React = require('react');

const Navbar = require('./Navbar');
const NavbarButton = require('./NavbarButton');

const {menuBar} = require('../../scss/components/menuBar.scss');

const MenuBar = () => (
  <Navbar className={menuBar}>
    <NavbarButton>File</NavbarButton>
    <NavbarButton>Edit</NavbarButton>
    <NavbarButton>Image</NavbarButton>
    <NavbarButton>View</NavbarButton>
    <NavbarButton>Help</NavbarButton>
  </Navbar>
);

MenuBar.propTypes = {
};

module.exports = MenuBar;
