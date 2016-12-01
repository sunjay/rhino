const React = require('react');
const classNames = require('classnames');

const {
  formGroup,
  formGroupHorizontal,
  formGroupVertical,
} = require('../../scss/components/form.scss');

const layouts = {
  horizontal: formGroupHorizontal,
  vertical: formGroupVertical,
};

const FormGroup = ({
  children,
  layout = 'vertical',
  className,
}) => (
  <div className={classNames(className, {
    [formGroup]: true,
    [layouts[layout]]: layouts[layout],
  })}>
    {children}
  </div>
);

FormGroup.propTypes = {
  children: React.PropTypes.any,
  className: React.PropTypes.string,
  layout: React.PropTypes.oneOf(Object.keys(layouts)),
};

module.exports = FormGroup;
