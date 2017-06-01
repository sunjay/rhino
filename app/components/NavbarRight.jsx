const PropTypes = require('prop-types');
const React = require('react');
const classNames = require('classnames');

const {navbarRight} = require('../../scss/components/navbar.scss');

const NavbarRight = ({className, children}) => (
  <div className={classNames(navbarRight, className)}>
    {children}
  </div>
);

NavbarRight.propTypes = {
  className: PropTypes.string,
  children: PropTypes.any,
};

module.exports = NavbarRight;
