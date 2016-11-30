const React = require('react');

const {page} = require('../../scss/components/page.scss');

const Page = ({children}) => (
  <div className={page}>
    {children}
  </div>
);

Page.propTypes = {
  children: React.PropTypes.any,
};

module.exports = Page;
