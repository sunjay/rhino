const React = require('react');

const Button = require('./Button');

const {navbarButton} = require('../../scss/components/navbar.scss');

const NavbarButton = ({children, ...props}) => (
  <Button {...props} style='navbar' size='xs' className={navbarButton}>
    {children}
  </Button>
);

NavbarButton.propTypes = {
  children: React.PropTypes.any,
};

module.exports = NavbarButton;
