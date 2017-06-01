const PropTypes = require('prop-types');
const React = require('react');
const classNames = require('classnames');

const {
  formGroup,
  formGroupHorizontal,
  formGroupVertical,
  formGroupInvalid,
} = require('../../scss/components/form.scss');

const layouts = {
  horizontal: formGroupHorizontal,
  vertical: formGroupVertical,
};

const FormGroup = ({
  children,
  layout = 'vertical',
  className,
  isValid = true,
}) => (
  <div className={classNames(className, {
    [formGroup]: true,
    [layouts[layout]]: !!layouts[layout],
    [formGroupInvalid]: !isValid,
  })}>
    {children}
  </div>
);

FormGroup.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
  layout: PropTypes.oneOf(Object.keys(layouts)),
  isValid: PropTypes.bool,
};

module.exports = FormGroup;
