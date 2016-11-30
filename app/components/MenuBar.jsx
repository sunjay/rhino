const React = require('react');

const Navbar = require('./Navbar');
const NavbarButton = require('./NavbarButton');
const Menu = require('./Menu');
const MenuItem = require('./MenuItem');
const MenuSeparator = require('./MenuSeparator');

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
    <Menu label='File'>
      <MenuItem>Open</MenuItem>
      <MenuItem>Save</MenuItem>
      <MenuItem>Save As</MenuItem>
      <MenuSeparator />
      <MenuItem>Close</MenuItem>
    </Menu>
    <Menu label='Edit'>
      <MenuItem>Undo</MenuItem>
      <MenuItem>Redo</MenuItem>
    </Menu>
    <Menu label='Image'>
      <MenuItem>Crop</MenuItem>
      <MenuItem>Resize Image</MenuItem>
      <MenuItem>Resize Canvas</MenuItem>
      <MenuSeparator />
      <MenuItem>Flip Horizontal</MenuItem>
      <MenuItem>Flip Vertical</MenuItem>
      <MenuSeparator />
      <MenuItem>Rotate 90&deg; Clockwise</MenuItem>
      <MenuItem>Rotate 90&deg; Counterclockwise</MenuItem>
      <MenuItem>Rotate 180&deg;</MenuItem>
    </Menu>
    <Menu label='View'>
      <MenuItem>Toggle Fullscreen</MenuItem>
    </Menu>
    <Menu label='Help'>
      <MenuItem href='http://rhinoeditor.com/'>Website</MenuItem>
      <MenuItem href='http://rhinoeditor.com/bugs'>Report a bug</MenuItem>
      <MenuSeparator />
      <MenuItem>About</MenuItem>
    </Menu>

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
