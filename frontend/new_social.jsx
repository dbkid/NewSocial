import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import * as ACTION from './actions/session_actions';
import * as PARTIAL_STORY_ACTION from './actions/partial_story_actions';
import Modal from 'react-modal';
import * as SELECTED_STORY_ACTION from "./actions/selected_story_actions";
import * as AUTHOR_ACTIONS from './actions/author_actions';
import * as TOPIC_TAG_ACTIONS from './actions/topic_tag_actions';
import * as TOPIC_ACTIONS from './actions/topic_actions';
import * as FOLLOW_ACTIONS from './actions/follow_actions';

window.SIGNUP = ACTION.SIGNUP;
window.signup = ACTION.signup;
window.LOGIN = ACTION.LOGIN;
window.login = ACTION.login;
window.LOGOUT = ACTION.LOGOUT;
window.logout = ACTION.logout;
window.DELETE_USER = ACTION.DELETE_USER;
window.deleteUser = ACTION.deleteUser;
window.fetchRandomStories = PARTIAL_STORY_ACTION.fetchRandomStories;
window.FETCH_RANDOM_STORIES = PARTIAL_STORY_ACTION.FETCH_RANDOM_STORIES;
window.FETCH_SELECTED_STORY = SELECTED_STORY_ACTION.FETCH_SELECTED_STORY;
window.fetchSelectedStory = SELECTED_STORY_ACTION.fetchSelectedStory;
window.createStory = SELECTED_STORY_ACTION.createStory;
window.CREATE_STORY = SELECTED_STORY_ACTION.CREATE_STORY;
window.EDIT_USER = AUTHOR_ACTIONS.EDIT_USER;
window.editUser = AUTHOR_ACTIONS.editUser;
window.createTopicTags = TOPIC_TAG_ACTIONS.createTopicTags;
window.fetchTopicShow = TOPIC_ACTIONS.fetchTopicShow;
window.createFollow = FOLLOW_ACTIONS.createFollow;
window.fetchTopicsIndex = TOPIC_ACTIONS.fetchTopicsIndex;
window.FETCH_TOPICS_INDEX = TOPIC_ACTIONS.FETCH_TOPICS_ACTIONS;


document.addEventListener('DOMContentLoaded', () => {
  let store;
  if (window.currentUser) {
    const initialState = {session: {currentUser: window.currentUser}};
    store = configureStore(initialState);
  } else {
    store = configureStore();
  }
  window.store = store;
  const root = document.getElementById("root");
  Modal.setAppElement(root);
  ReactDOM.render(<Root store={store}/>, root);
});
