const PropTypes = require('prop-types');
const React = require('react');
const classNames = require('classnames');

const {navbar} = require('../../scss/components/navbar.scss');

const Navbar = ({className, children}) => (
  <div className={classNames({
    [navbar]: true,
  }, className)}>
    {children}
  </div>
);

Navbar.propTypes = {
  className: PropTypes.string,
  children: PropTypes.any,
};

module.exports = Navbar;
