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
    [layouts[layout]]: layouts[layout],
    [formGroupInvalid]: !isValid,
  })}>
    {children}
  </div>
);

FormGroup.propTypes = {
  children: React.PropTypes.any,
  className: React.PropTypes.string,
  layout: React.PropTypes.oneOf(Object.keys(layouts)),
  isValid: React.PropTypes.bool,
};

module.exports = FormGroup;
