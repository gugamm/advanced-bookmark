import { stateToAction } from 'redux-api-mapper';
import { signInStart, signInComplete, signInError } from '../actions/index';

const auth = {
  name : 'Auth',
  path : '/auth',
  endPoints : [
    {
      name   : 'signin',
      method : 'post',
      path   : '/signin',
      action : stateToAction(signInStart, signInComplete, signInError),
      options : {
        responseParse : (response) => response.ok ? JSON.parse(response.data).token : response
      }
    }
  ]
};

export default auth;