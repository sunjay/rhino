const React = require('react');
const classNames = require('classnames');

const {formFieldset} = require('../../scss/components/form.scss');

const Fieldset = ({children, className}) => (
  <fieldset className={classNames(formFieldset, className)}>
    {children}
  </fieldset>
);

Fieldset.propTypes = {
  children: React.PropTypes.any,
  className: React.PropTypes.string,
};

module.exports = Fieldset;
