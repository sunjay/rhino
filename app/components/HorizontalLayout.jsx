const React = require('react');

const {horizontal} = require('../../scss/components/layouts.scss');

const HorizontalLayout = ({children}) => (
  <div className={horizontal}>
    {children}
  </div>
);

HorizontalLayout.propTypes = {
  children: React.PropTypes.any,
};

module.exports = HorizontalLayout;
