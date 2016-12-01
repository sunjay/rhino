const React = require('react');
const classNames = require('classnames');

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
  menuBarFullScreen,
} = require('../../scss/components/menuBar.scss');

const MenuBar = ({
  isFullScreen,
  image,
  view,
  dispatch,
  minimizeWindow,
  maximizeWindow,
  closeWindow,
  toggleFullscreen,
  modal = false,
}) => (
  <Navbar className={classNames({
    [menuBar]: true,
    [menuBarFullScreen]: isFullScreen,
  })}>
    {!modal ? menu(dispatch).map(({label, submenu}) => (
      <Menu key={label} label={label}>
        {submenu ?
          submenu.map(({type, label, accelerator, click, disabled}, i) => {
            if (type === 'separator') {
              return (
                <MenuSeparator key={'sep' + i} />
              );
            }
            else {
              const disable = disabled ? disabled({image, view}) : false;
              if (disable) {
                click = (e) => e.stopPropagation();
              }
              return (
                <MenuItem key={label} label={label} disabled={disable}
                  accelerator={accelerator} onClick={click} />
              );
            }
          })
          : null
        }
      </Menu>
    )) : null}

    <div className={menuBarRight}>
      {isFullScreen ?
        <NavbarButton onClick={toggleFullscreen}>
          Exit Fullscreen (F11)
        </NavbarButton>
        : null
      }
      {!modal && !isFullScreen ?
        <NavbarButton onClick={minimizeWindow}>
          <span className={menuBarLarge}>&ndash;</span>
        </NavbarButton>
        : null
      }
      {!modal && !isFullScreen ?
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
  image: React.PropTypes.object,
  view: React.PropTypes.object,
  dispatch: React.PropTypes.func.isRequired,
  minimizeWindow: React.PropTypes.func.isRequired,
  maximizeWindow: React.PropTypes.func.isRequired,
  closeWindow: React.PropTypes.func.isRequired,
  toggleFullscreen: React.PropTypes.func.isRequired,
  modal: React.PropTypes.bool,
};

module.exports = MenuBar;
