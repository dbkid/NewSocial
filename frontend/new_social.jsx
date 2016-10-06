import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import * as ACTION from './actions/session_actions';
import * as PARTIAL_STORY_ACTION from './actions/partial_story_actions';
import Modal from 'react-modal';

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

let store = configureStore();
window.store = store;

document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById("root");
    Modal.setAppElement(root);
    ReactDOM.render(<Root store={store}/>, root);
});
