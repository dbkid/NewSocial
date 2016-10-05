export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";
export const SIGNUP = "SIGNUP";
export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";
export const DELETE_USER = "DELETE_USER";
export const RECEIVE_USER_DELETION = "RECEIVE_USER_DELETION";

export const login = (user) => ({
  type: LOGIN,
  user: user
});

export const logout = () => ({
  type: LOGOUT
});

export const signup = (user) => ({
  type: SIGNUP,
  user: user
});

export const receiveCurrentUser = (currentUser) => ({
  type: RECEIVE_CURRENT_USER,
  currentUser: currentUser
});

export const receiveErrors = (errors) => ({
  type: RECEIVE_ERRORS,
  errors: errors
});

export const deleteUser = (user) => ({
  type: DELETE_USER,
  user: user
});

export const receiveUserDeletion = () => ({
  type: RECEIVE_USER_DELETION
});
