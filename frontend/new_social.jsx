import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import * as ACTION from './actions/session_actions';

window.SIGNUP = ACTION.SIGNUP;
window.signup = ACTION.signup;
window.LOGIN = ACTION.LOGIN;
window.login = ACTION.login;
window.LOGOUT = ACTION.LOGOUT;
window.logout = ACTION.logout;
window.DELETE_USER = ACTION.DELETE_USER;
window.deleteUser = ACTION.deleteUser;

let store = configureStore();
window.store = store;

document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById("root");
    ReactDOM.render(<Root store={store}/>, root);
});
