const React = require('react');
const {DragDropContext} = require('react-dnd');
const HTML5Backend = require('react-dnd-html5-backend');

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

module.exports = DragDropContext(HTML5Backend)(App);
