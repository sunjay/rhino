const React = require('react');
const debounce = require('lodash.debounce');
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

  componentDidMount() {
    window.addEventListener('resize', this.onResize());
  },

  componentWillUnmount() {
    window.removeEventListener('resize', this.onResize());
  },

  onResize() {
    if (!this._onResize) {
      this._onResize = debounce(function() {
        this.close();
      }.bind(this), 1000, {leading: true, trailing: false});
    }
    return this._onResize;
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
      <ClickOutside className={menu} onClickOutside={open ? this.close : () => {}}>
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
