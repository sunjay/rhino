const React = require('react');

require('../../scss/index.scss');

const App = ({children}) => (
  <div>
    {children}
  </div>
);

App.propTypes = {
  children: React.PropTypes.node,
};

module.exports = App;

