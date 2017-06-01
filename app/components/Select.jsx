const PropTypes = require('prop-types');
const React = require('react');
const classNames = require('classnames');

const {formControl} = require('../../scss/components/form.scss');

const Select = ({children, className, ...props}) => (
  <select className={classNames(formControl, className)} {...props}>
    {children}
  </select>
);

Select.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
};

module.exports = Select;
