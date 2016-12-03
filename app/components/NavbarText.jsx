const React = require('react');
const classNames = require('classnames');

const {navbarText} = require('../../scss/components/navbar.scss');

const NavbarText = ({className, children}) => (
  <span className={classNames(navbarText, className)}>
    {children}
  </span>
);

NavbarText.propTypes = {
  className: React.PropTypes.string,
  children: React.PropTypes.any,
};

module.exports = NavbarText;
