const React = require('react');
const classNames = require('classnames');

const {
  form: formClass,
  formHorizontal,
  formVertical,
} = require('../../scss/components/form.scss');

const layouts = {
  horizontal: formHorizontal,
  vertical: formVertical,
};

const Form = ({
  children,
  className,
  layout = 'vertical',
  ...props
}) => (
  <form className={classNames({
    [formClass]: true,
    [layouts[layout]]: !!layouts[layout],
  }, className)} {...props}>
    {children}
  </form>
);

Form.propTypes = {
  children: React.PropTypes.any,
  className: React.PropTypes.string,
  layout: React.PropTypes.oneOf(Object.keys(layouts)),
};

module.exports = Form;
