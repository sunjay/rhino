const PropTypes = require('prop-types');
const React = require('react');

const {horizontal} = require('../../scss/components/layouts.scss');

const HorizontalLayout = ({children}) => (
  <div className={horizontal}>
    {children}
  </div>
);

HorizontalLayout.propTypes = {
  children: PropTypes.any,
};

module.exports = HorizontalLayout;
