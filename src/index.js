import ReactDOM from 'react-dom';
import React from 'react';
import { Router, hashHistory, Route, IndexRoute } from 'react-router';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers/index';

import App from './containers/App';
import Home from './containers/Home';

const store = createStore(rootReducer);

const container = document.getElementById('container');
const appElement = (
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Home} />
        <Route path="signin" getComponent={function (next, cb) {
          import('./containers/SignIn').then(module => cb(null,module.default));
        }} />
        <Route path="signout" getComponent={function (next, cb) {
          import('./containers/SignOut').then(module => cb(null, module.default));
        }} />
      </Route>
    </Router>
  </Provider>
);

ReactDOM.render(appElement, container);
