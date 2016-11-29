const React = require('react');

const {main} = require('../../scss/components/main.scss');

const MainContent = ({children}) => (
  <div className={main}>
    {children}
  </div>
);

MainContent.propTypes = {
  children: React.PropTypes.any,
};

module.exports = MainContent;
