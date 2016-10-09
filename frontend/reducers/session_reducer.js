import {
  LOGIN,
  LOGOUT,
  SIGNUP,
  RECEIVE_CURRENT_USER,
  RECEIVE_ERRORS,
  RECEIVE_USER_DELETION
} from '../actions/session_actions';

import merge from 'lodash/merge';

export const SessionReducer = (state = { currentUser: null, errors: [] }, action) => {
  switch(action.type){
    case(RECEIVE_CURRENT_USER):
    debugger
      return { currentUser: action.currentUser, errors: [] };
    case(RECEIVE_ERRORS):
      return { currentUser: null, errors: action.errors };
    case(LOGOUT):
      return { currentUser: null, errors: [] };
    case(RECEIVE_USER_DELETION):
      return { currentUser: null, errors: [] };
    default:
      return state;
  }
};
