const React = require('react');
const {Router, IndexRoute, IndexRedirect, Route} = require('react-router');

const routes = require('./routes');

const App = require('./components/App');
const NotFound = require('./components/pages/NotFound');

const wrapWithStore = (func, store) => {
  if (func) {
    func = func.bind(null, store);
  }
  return func;
};

const createRoute = ({store, routeKey, indexRoute = false, children = undefined}) => {
  const RouteClass = indexRoute ? IndexRoute : Route;
  return (
    <RouteClass key={routeKey} path={indexRoute ? undefined : routes[routeKey].path}
      component={routes[routeKey].component}
      onEnter={wrapWithStore(routes[routeKey].onEnter, store)}
      onLeave={wrapWithStore(routes[routeKey].onLeave, store)}>
      {children}
    </RouteClass>
  );
};

const createRouter = (history, store) => (
  <Router history={history}>
    <Route path='/' component={App}>
      <IndexRedirect to='/editor' />
      {createRoute({store, routeKey: 'editor'})}
      {createRoute({store, routeKey: 'about'})}
      {createRoute({store, routeKey: 'resize'})}
      <Route path='*' component={NotFound}/>
    </Route>
  </Router>
);

module.exports = createRouter;
