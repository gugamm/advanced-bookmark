import { SIGN_OUT, SIGN_IN_COMPLETE, SIGN_IN_ERROR, CLEAR_SIGN_IN_ERROR, SIGN_IN_START } from '../actions/types';

export default (prevState = {authenticated : false, isFetching : false, error : ""}, action) => {

  switch (action.type) {
    case SIGN_IN_START       : return {...prevState, isFetching : true, error : ""};
    case SIGN_IN_COMPLETE    : return {authenticated: true, isFetching : false , error : ""};
    case SIGN_IN_ERROR       : return {...prevState, isFetching : false, error : action.payload};
    case SIGN_OUT            : return {...prevState, authenticated : false};
    case CLEAR_SIGN_IN_ERROR : return {...prevState, error : ""};
  }

  return prevState;
};
