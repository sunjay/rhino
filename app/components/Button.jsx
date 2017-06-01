const PropTypes = require('prop-types');
const React = require('react');
const classNames = require('classnames');

const Button = ({
  className,
  size,
  children,
  style = 'default',
  type = null,
  block = false,
  active = false,
  disabled = false,
  ...props
}) => {
  const Element = type ? 'input' : 'div';
  return (
    <Element {...props} disabled={disabled}
      type={type} value={type && children}
      className={classNames({
        btn: true,
        [`btn-${style}`]: !!style,
        [`btn-${size}`]: !!size,
        ['btn-block']: !!block,
        ['active']: !!active,
        ['disabled']: !!disabled,
      }, className)}>
      {type ? null : children}
    </Element>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.any,
  type: PropTypes.string,
  style: PropTypes.oneOf([
    'default', 'primary', 'secondary', 'success',
    'info', 'warning', 'danger', 'link', 'navbar',
  ]),
  size: PropTypes.oneOf(['xs', 'sm', 'lg']),
  block: PropTypes.bool,
  active: PropTypes.bool,
  disabled: PropTypes.bool,
};

module.exports = Button;
