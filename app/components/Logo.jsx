const React = require('react');
const classNames = require('classnames');

const {
  logo,
  logoNavbar,
  logoLarge,
  logoCenter,
  logoBlock,
} = require('../../scss/components/logo.scss');

const sizes = {
  navbar: logoNavbar,
  large: logoLarge,
};

const alignments = {
  center: logoCenter,
};

const Logo = ({
  size,
  align,
  block = false,
}) => (
  <span className={classNames({
    [logo]: true,
    [sizes[size]]: !!sizes[size],
    [alignments[align]]: !!alignments[align],
    [logoBlock]: block,
  })} />
);

Logo.propTypes = {
  size: React.PropTypes.oneOf(Object.keys(sizes)),
  align: React.PropTypes.oneOf(Object.keys(alignments)),
  block: React.PropTypes.bool,
};

module.exports = Logo;
