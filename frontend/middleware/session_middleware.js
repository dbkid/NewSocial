
import { LOGIN, LOGOUT, SIGNUP, RECEIVE_ERRORS, DELETE_USER } from '../actions/session_actions';
import { receiveCurrentUser, receiveErrors, receiveUserDeletion } from '../actions/session_actions';
import { login, logout, signup, deleteUser } from '../util/session_api_util.js'
import { receiveFollowedTopics } from '../actions/topic_actions';
import { createFollow } from '../util/follow_api_util';
import { CREATE_FOLLOW } from '../actions/follow_actions';
import { hashHistory } from 'react-router';
import { fetchRandomStories } from '../actions/partial_story_actions';
import { fetchTopicFollows } from '../actions/topic_follow_actions';


export default ({ getState, dispatch }) => next => action => {

  const success = (user) => dispatch(receiveCurrentUser(user));
  const error = (errors) => dispatch(receiveErrors(errors));

  const loginSuccess = (data) => {
        dispatch(receiveCurrentUser(data));
        // dispatch(receiveFollowedTopics(data.followedTopics));
        dispatch(fetchRandomStories());
        dispatch(fetchTopicFollows());
        return;
      };

  const logoutSuccess = () => {
    hashHistory.push("/");
  }

  switch(action.type){
    case(LOGIN):
      login(action.user, loginSuccess, error);
      return next(action);
    case(LOGOUT):
      logout(logoutSuccess);
      return next(action);
    case(SIGNUP):
      signup(action.user, success, error);
      return next(action);
    case(DELETE_USER):
      let callback = dispatch(receiveUserDeletion());
      deleteUser(action.user, callback);
      return next(action);
    case(CREATE_FOLLOW):
      createFollow(action.followerId, action.followedId, success);
      return next(action);
    default:
      return next(action);
  }
};
