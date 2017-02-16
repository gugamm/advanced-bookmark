import { createStore, applyMiddleware } from 'redux';
import { signInComplete } from './actions'
import rootReducer from './reducers/index';

const logger = store => next => action => {
  next(action);
};

const store = createStore(rootReducer, applyMiddleware(logger));

if (window.localStorage.getItem('token'))
  store.dispatch(signInComplete(window.localStorage.getItem('token')));

export default store;
