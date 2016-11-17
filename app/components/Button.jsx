const React = require('react');
const classNames = require('classnames');

const Button = ({className, style, children, block = false, ...props}) => (
  <div {...props} className={classNames(className, {
    btn: true,
    [`btn-${style}`]: !!style,
    ['btn-block']: !!block,
  })}>
    {children}
  </div>
);

Button.propTypes = {
  className: React.PropTypes.string,
  children: React.PropTypes.any,
  style: React.PropTypes.oneOf([
    'default', 'primary', 'secondary', 'success',
    'info', 'warning', 'danger', 'link',
  ]),
  block: React.PropTypes.bool,
};

module.exports = Button;
