const PropTypes = require('prop-types');
const React = require('react');
const classNames = require('classnames');

const {formFieldset} = require('../../scss/components/form.scss');

const Fieldset = ({children, className}) => (
  <fieldset className={classNames(formFieldset, className)}>
    {children}
  </fieldset>
);

Fieldset.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
};

module.exports = Fieldset;
