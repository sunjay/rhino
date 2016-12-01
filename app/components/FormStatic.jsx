const React = require('react');
const classNames = require('classnames');

const {formStatic} = require('../../scss/components/form.scss');

const FormStatic = ({children, className}) => (
  <span className={classNames(formStatic, className)}>
    {children}
  </span>
);

FormStatic.propTypes = {
  children: React.PropTypes.any,
  className: React.PropTypes.string,
};

module.exports = FormStatic;
