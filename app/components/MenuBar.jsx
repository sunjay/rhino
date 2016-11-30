const React = require('react');

const menu = require('../menu');

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
  dispatch,
  minimizeWindow,
  maximizeWindow,
  closeWindow,
}) => (
  <Navbar className={menuBar}>
    {menu(dispatch).map(({label, submenu}) => (
      <Menu key={label} label={label}>
        {submenu ?
          submenu.map(({type, label, accelerator, click}, i) => {
            if (type === 'separator') {
              return (
                <MenuSeparator key={'sep' + i} />
              );
            }
            else {
              return (
                <MenuItem key={label} accelerator={accelerator} onClick={click}>
                  {label}
                </MenuItem>
              );
            }
          })
          : null
        }
      </Menu>
    ))}

    <div className={menuBarRight}>
      <NavbarButton onClick={minimizeWindow}>
        <span className={menuBarLarge}>&ndash;</span>
      </NavbarButton>
      <NavbarButton onClick={maximizeWindow}>
        <span className={menuBarLarge}>+</span>
      </NavbarButton>
      <NavbarButton onClick={closeWindow}>
        <span className={menuBarLarge}>&times;</span>
      </NavbarButton>
    </div>
  </Navbar>
);

MenuBar.propTypes = {
  dispatch: React.PropTypes.func.isRequired,
  minimizeWindow: React.PropTypes.func.isRequired,
  maximizeWindow: React.PropTypes.func.isRequired,
  closeWindow: React.PropTypes.func.isRequired,
};

module.exports = MenuBar;
