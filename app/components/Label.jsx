const React = require('react');
const classNames = require('classnames');

const {
  formLabel,
  formLabelHasControl,
} = require('../../scss/components/form.scss');

const Label = ({children, controlId, className}) => (
  <label htmlFor={controlId} className={classNames({
    [formLabel]: true,
    [formLabelHasControl]: !!controlId,
  }, className)}>
    {children}
  </label>
);

Label.propTypes = {
  children: React.PropTypes.any,
  className: React.PropTypes.string,
};

module.exports = Label;
