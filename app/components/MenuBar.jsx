const PropTypes = require('prop-types');
const React = require('react');
const CloseOnEscape = require('react-close-on-escape').default;
const classNames = require('classnames');

const menu = require('../menu');

const Navbar = require('./Navbar');
const NavbarButton = require('./NavbarButton');
const NavbarRight = require('./NavbarRight');
const Menu = require('./Menu');
const MenuItem = require('./MenuItem');
const MenuSeparator = require('./MenuSeparator');
const Logo = require('./Logo');

const {
  menuBar,
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
  title = null,
}) => (
  <Navbar className={classNames({
    [menuBar]: true,
    [menuBarFullScreen]: isFullScreen,
  })}>
    {modal ?
      <CloseOnEscape onEscape={closeWindow}><span /></CloseOnEscape>
      : null
    }
    {!modal ?
      <span><Logo size='navbar' />&emsp;</span>
      : null
    }
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

    {modal && title ?
      <span>{title}</span>
      : null
    }

    <NavbarRight>
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
    </NavbarRight>
  </Navbar>
);

MenuBar.propTypes = {
  isFullScreen: PropTypes.bool.isRequired,
  image: PropTypes.object,
  view: PropTypes.object,
  dispatch: PropTypes.func.isRequired,
  minimizeWindow: PropTypes.func.isRequired,
  maximizeWindow: PropTypes.func.isRequired,
  closeWindow: PropTypes.func.isRequired,
  toggleFullscreen: PropTypes.func.isRequired,
  modal: PropTypes.bool,
  title: PropTypes.string,
};

module.exports = MenuBar;
