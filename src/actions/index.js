import { SIGN_IN_COMPLETE, SIGN_IN_ERROR, SIGN_OUT, SIGN_IN_START, CLEAR_SIGN_IN_ERROR,
GET_SECTIONS, CREATE_SECTION, UPDATE_SECTION, DELETE_SECTION, ADD_LINK, UPDATE_LINK, DELETE_LINK
} from './types';

import { createAction } from '../utils/create-action';
import { hashHistory } from 'react-router';

export const signInStart      = createAction(SIGN_IN_START);
export const signInComplete   = (token) => {
  window.localStorage.setItem('token', token);
  hashHistory.push('/');
  return {
    type    : SIGN_IN_COMPLETE
  };
};
export const signInError      = (response) => {
  return {
    type : SIGN_IN_ERROR,
    payload : JSON.parse(response.data).error
  };
};
export const clearSignInError = createAction(CLEAR_SIGN_IN_ERROR);

export const signOut = () => {
  window.localStorage.removeItem('token');
  return {
    type : SIGN_OUT
  }
};


export const getSections   = (sections) => {
  return {
    type : GET_SECTIONS,
    payload : sections
  }
};
export const createSection = (section) => {
  return {
    type : CREATE_SECTION,
    payload : section
  }
};
export const updateSection = (section) => {
  return {
    type : UPDATE_SECTION,
    payload : section
  }
};
export const deleteSection = (id) => {
  return {
    type : DELETE_SECTION,
    payload : id
  }
};
export const addLink       = ({sid, link}) => {
  return {
    type : ADD_LINK,
    payload : {sid, link}
  }
};
export const updateLink    = (link) => {
  return {
    type : UPDATE_LINK,
    payload : link
  }
};
export const deleteLink    = (id) => {
  return {
    type : DELETE_LINK,
    payload : id
  }
};
