const React = require('react');

const Navbar = require('./Navbar');
const NavbarButton = require('./NavbarButton');

const {
  menuBar,
  menuBarRight,
  menuBarLarge,
} = require('../../scss/components/menuBar.scss');

const MenuBar = ({
  minimize = () => {},
  maximize = () => {},
  close = () => {},
}) => (
  <Navbar className={menuBar}>
    <NavbarButton>File</NavbarButton>
    <NavbarButton>Edit</NavbarButton>
    <NavbarButton>Image</NavbarButton>
    <NavbarButton>View</NavbarButton>
    <NavbarButton>Help</NavbarButton>

    <div className={menuBarRight}>
      <NavbarButton onClick={minimize}>
        <span className={menuBarLarge}>&ndash;</span>
      </NavbarButton>
      <NavbarButton onClick={maximize}>
        <span className={menuBarLarge}>+</span>
      </NavbarButton>
      <NavbarButton onClick={close}>
        <span className={menuBarLarge}>&times;</span>
      </NavbarButton>
    </div>
  </Navbar>
);

MenuBar.propTypes = {
};

module.exports = MenuBar;
