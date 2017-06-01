const PropTypes = require('prop-types');
const React = require('react');

const Button = require('./Button');

const {navbarButton} = require('../../scss/components/navbar.scss');

const NavbarButton = ({children, ...props}) => (
  <Button style='navbar' size='xs' className={navbarButton} {...props}>
    {children}
  </Button>
);

NavbarButton.propTypes = {
  children: PropTypes.any,
};

module.exports = NavbarButton;
