import ReactDOM from 'react-dom';
import React from 'react';
import { Router, hashHistory, Route, IndexRoute } from 'react-router';
import { Provider } from 'react-redux';
import { clearSignInError } from './actions';
import store from './store';
import api from './api/index';
import { ApiProvider } from 'redux-api-mapper';

import App from './containers/App';
import Home from './containers/Home';

api.Sections.getSections.call();

const container = document.getElementById('container');
const appElement = (
  <Provider store={store}>
    <ApiProvider api={api}>
      <Router history={hashHistory}>
        <Route path="/" component={App}>
          <IndexRoute component={Home} />
          <Route path="signin" onLeave={() => store.dispatch(clearSignInError())} getComponent={function (next, cb) {
            import('./containers/SignIn').then(module => cb(null,module.default));
          }} />
          <Route path="signout" getComponent={function (next, cb) {
            import('./containers/SignOut').then(module => cb(null, module.default));
          }} />
        </Route>
      </Router>
    </ApiProvider>
  </Provider>
);

ReactDOM.render(appElement, container);
