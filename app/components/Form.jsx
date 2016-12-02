const React = require('react');
const classNames = require('classnames');

const {form: formClass} = require('../../scss/components/form.scss');

const Form = ({children, className, ...props}) => (
  <form className={classNames(formClass, className)} {...props}>
    {children}
  </form>
);

Form.propTypes = {
  children: React.PropTypes.any,
  className: React.PropTypes.string,
};

module.exports = Form;
