require('babel-polyfill');

const React = require('react');
const ReactDOM = require('react-dom');
const {Provider} = require('react-redux');
const {compose, createStore, applyMiddleware} = require('redux');
const {hashHistory} = require('react-router');
const {routerMiddleware, syncHistoryWithStore} = require('react-router-redux');
const createLogger = require('redux-logger');
const thunk = require('redux-thunk').default;

const createRouter = require('./router');
const appReducer = require('./reducers/app');

const ImageWorker = require('./services/imageWorker');
const Remote = require('./services/remote');

const image = new ImageWorker();
const remote = new Remote();

const logger = createLogger();
const store = createStore(
  appReducer,
  compose(
    applyMiddleware(
      routerMiddleware(hashHistory),
      thunk,
      image.middleware(),
      remote.middleware(),
      // The logger MUST be last (other than DevTools)
      logger
    ),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
);

const history = syncHistoryWithStore(hashHistory, store);

ReactDOM.render(
  <Provider store={store}>
    {createRouter(history, store)}
  </Provider>,
  document.getElementById('app-container')
);

image.start(store);
remote.start(store);
