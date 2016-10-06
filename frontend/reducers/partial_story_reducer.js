import { RECEIVE_PARTIAL_STORIES } from '../actions/partial_story_actions';

import merge from 'lodash/merge';

const defaultState = [{
  id: null,
  author: { id: null, name: null },
  title: null,
  splice: null,
  like_count: null,
  response_count: null,
  bookmarked: false,
  timestamp: null
}];

export const PartialStoryReducer = (state = defaultState, action) => {

  switch(action.type){
    case(RECEIVE_PARTIAL_STORIES):
      return action.stories;
    default:
      return state;
  }


};
