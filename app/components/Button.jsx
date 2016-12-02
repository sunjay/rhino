const React = require('react');
const classNames = require('classnames');

const Button = ({
  className,
  style,
  size,
  children,
  type = null,
  block = false,
  active = false,
  disabled = false,
  ...props
}) => {
  const Element = type ? 'input' : 'div';
  return (
    <Element {...props} className={classNames({
      btn: true,
      [`btn-${style}`]: !!style,
      [`btn-${size}`]: !!size,
      ['btn-block']: !!block,
      ['active']: !!active,
      ['disabled']: !!disabled,
    }, className)} value={type && children}>
      {type ? null : children}
    </Element>
  );
};

Button.propTypes = {
  className: React.PropTypes.string,
  children: React.PropTypes.any,
  type: React.PropTypes.string,
  style: React.PropTypes.oneOf([
    'default', 'primary', 'secondary', 'success',
    'info', 'warning', 'danger', 'link', 'navbar',
  ]),
  size: React.PropTypes.oneOf(['xs', 'sm', 'lg']),
  block: React.PropTypes.bool,
  active: React.PropTypes.bool,
  disabled: React.PropTypes.bool,
};

module.exports = Button;
