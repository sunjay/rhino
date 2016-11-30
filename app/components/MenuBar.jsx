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
  isFullScreen,
  dispatch,
  minimizeWindow,
  maximizeWindow,
  closeWindow,
  toggleFullscreen,
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
                <MenuItem key={label} label={label}
                  accelerator={accelerator} onClick={click} />
              );
            }
          })
          : null
        }
      </Menu>
    ))}

    <div className={menuBarRight}>
      {isFullScreen ?
        <NavbarButton onClick={toggleFullscreen}>
          Exit Fullscreen (F11)
        </NavbarButton>
        : null
      }
      {!isFullScreen ?
        <NavbarButton onClick={minimizeWindow}>
          <span className={menuBarLarge}>&ndash;</span>
        </NavbarButton>
        : null
      }
      {!isFullScreen ?
        <NavbarButton onClick={maximizeWindow}>
          <span className={menuBarLarge}>+</span>
        </NavbarButton>
        : null
      }
      {!isFullScreen ?
        <NavbarButton onClick={closeWindow}>
          <span className={menuBarLarge}>&times;</span>
        </NavbarButton>
        : null
      }
    </div>
  </Navbar>
);

MenuBar.propTypes = {
  isFullScreen: React.PropTypes.bool.isRequired,
  dispatch: React.PropTypes.func.isRequired,
  minimizeWindow: React.PropTypes.func.isRequired,
  maximizeWindow: React.PropTypes.func.isRequired,
  closeWindow: React.PropTypes.func.isRequired,
  toggleFullscreen: React.PropTypes.func.isRequired,
};

module.exports = MenuBar;
