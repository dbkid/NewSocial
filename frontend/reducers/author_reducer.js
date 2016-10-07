import { RECEIVE_AUTHOR_INFO } from '../actions/author_actions';

import merge from 'lodash/merge';

const defaultState = {
  name: null,
  id: null,
  followers: null,
  follows: null,
  followed: false
};

export const AuthorReducer = (state = defaultState, action) => {

  switch(action.type){
    case(RECEIVE_AUTHOR_INFO):
      return action.authorInfo;
    default:
      return state;
  }

};
