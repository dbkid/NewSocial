
import { LOGIN, LOGOUT, SIGNUP, RECEIVE_ERRORS, DELETE_USER } from '../actions/session_actions';
import { receiveCurrentUser, receiveErrors, receiveUserDeletion } from '../actions/session_actions';
import { login, logout, signup, deleteUser } from '../util/session_api_util.js'
import { receiveFollowedTopics } from '../actions/topic_actions';

export default ({ getState, dispatch }) => next => action => {

  const success = (user) => dispatch(receiveCurrentUser(user));
  const error = (errors) => dispatch(receiveErrors(errors));

  const loginSuccess = (data) => {
        dispatch(receiveCurrentUser(currentUser));
        dispatch(receiveFollowedTopics(data.followedTopics));
        return;
      };

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
    case(DELETE_USER):
      let callback = dispatch(receiveUserDeletion());
      deleteUser(action.user, callback);
      return next(action);
    default:
      return next(action);
  }
};
