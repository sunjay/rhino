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
  className: React.PropTypes.string,
  children: React.PropTypes.any,
};

module.exports = Navbar;
