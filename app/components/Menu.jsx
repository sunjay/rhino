const React = require('react');
const ClickOutside = require('react-click-outside').default;

const NavbarButton = require('./NavbarButton');

const {
  menu,
  menuItems,
} = require('../../scss/components/menuBar.scss');

const Menu = React.createClass({
  propTypes: {
    label: React.PropTypes.node.isRequired,
    children: React.PropTypes.any,
  },

  getInitialState() {
    return {
      open: false,
    };
  },

  toggleOpen() {
    this.setState({open: !this.state.open});
  },

  close() {
    this.setState({open: false});
  },

  render() {
    const {open} = this.state;
    const {label, children} = this.props;

    return (
      <ClickOutside className={menu} onClickOutside={this.close}>
        <NavbarButton active={open} onClick={this.toggleOpen}>{label}</NavbarButton>
        {children && open ?
          <ul className={menuItems} onClick={this.close}>
            {children}
          </ul>
          : null
        }
      </ClickOutside>
    );
  },
});

module.exports = Menu;
