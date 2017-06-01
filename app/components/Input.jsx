const PropTypes = require('prop-types');
const React = require('react');
const classNames = require('classnames');

const {formControl} = require('../../scss/components/form.scss');

const Input = ({type, className, ...props}) => {
  const FormControl = type === 'textarea' ? 'textarea' : 'input';
  return (
    <FormControl {...props} type={type}
      className={classNames(formControl, className)} />
  );
};

Input.propTypes = {
  type: PropTypes.string,
  className: PropTypes.string,
};

module.exports = Input;
