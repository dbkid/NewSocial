
import { LOGIN, LOGOUT, SIGNUP, RECEIVE_ERRORS } from '../actions/session_actions';
import { receiveCurrentUser, receiveErrors } from '../actions/session_actions';
import { login, logout, signup } from '../util/session_api_util.js'

export default ({ getState, dispatch }) => next => action => {

  const success = (user) => dispatch(receiveCurrentUser(user));
  const error = (errors) => dispatch(receiveErrors(errors));

  switch(action.type){
    case(LOGIN):
      login(action.user, success, error);
      return next(action);
    case(LOGOUT):
      logout(()=>next(action));
      break;
    case(SIGNUP):
      signup(action.user, success, error);
      return next(action);
    default:
      return next(action);
  }
};
