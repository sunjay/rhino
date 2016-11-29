const React = require('react');
const classNames = require('classnames');

const Button = ({className, style, size, children, block = false, ...props}) => (
  <div {...props} className={classNames({
    btn: true,
    [`btn-${style}`]: !!style,
    [`btn-${size}`]: !!size,
    ['btn-block']: !!block,
  }, className)}>
    {children}
  </div>
);

Button.propTypes = {
  className: React.PropTypes.string,
  children: React.PropTypes.any,
  style: React.PropTypes.oneOf([
    'default', 'primary', 'secondary', 'success',
    'info', 'warning', 'danger', 'link', 'navbar',
  ]),
  size: React.PropTypes.oneOf(['xs', 'sm', 'lg']),
  block: React.PropTypes.bool,
};

module.exports = Button;
