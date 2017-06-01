const PropTypes = require('prop-types');
const React = require('react');
const classNames = require('classnames');

const {page} = require('../../scss/components/page.scss');

const Page = ({children, className}) => (
  <div className={classNames(page, className)}>
    {children}
  </div>
);

Page.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
};

module.exports = Page;
