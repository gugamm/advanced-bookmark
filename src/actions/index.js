import { SIGN_IN, SIGN_OUT } from './types';

export function signIn() {
  return {
    type : SIGN_IN
  }
};

export function signOut() {
  return {
    type : SIGN_OUT
  }
};
