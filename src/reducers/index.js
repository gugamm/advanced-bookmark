import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import auth from './auth';
import sections from './sections';

const rootReducer = combineReducers({
  auth, form, sections
});

export default rootReducer;