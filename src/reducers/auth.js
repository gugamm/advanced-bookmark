import { SIGN_OUT, SIGN_IN } from '../actions/types';

export default (prevState = false, action) => {

  switch (action.type) {
    case SIGN_IN  : return true;
    case SIGN_OUT : return false;
  }

  return prevState;
};
