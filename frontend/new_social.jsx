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
