const React = require('react');

require('../../scss/index.scss');

const {app} = require('../../scss/components/app.scss');

const App = ({children}) => (
  <div className={app}>
    {children}
  </div>
);

App.propTypes = {
  children: React.PropTypes.node,
};

module.exports = App;
