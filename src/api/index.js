import { createMapper } from 'redux-api-mapper';
import store from '../store';
import auth from './auth';
import sections from './sections';

const config = {
  host : 'http://localhost:3000',
  headers : {
    'Content-Type'  : 'application/json',
    'Authorization' : () => window.localStorage.getItem('token')
  },
  resources : [auth, sections]
};

const api = createMapper(store, config);

export default api;
