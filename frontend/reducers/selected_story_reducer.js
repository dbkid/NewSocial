import { RECEIVE_SELECTED_STORY, PASS_STORY, CLEAR_SELECTED_STORY } from '../actions/selected_story_actions';
import { RECEIVE_TOPIC_TAGS } from '../actions/topic_tag_actions';

import merge from 'lodash/merge';

const defaultState = {
  id: null,
  author: { name: null, followed: false },
  title: null,
  content: null,
  likeCount: null,
  topics: [ { id: null, title: null } ],
  responses: [ { id: null, title: null, content: null, author: {id: null, name: null } } ],
  liked: false,
  bookmarked: false,
  timestamp: null
};

export const SelectedStoryReducer = (state = defaultState, action) => {

  switch(action.type){
    case(RECEIVE_SELECTED_STORY):
      return action.story;
    case(PASS_STORY):
      return merge({}, state, action.story);
    case(CLEAR_SELECTED_STORY):
      return defaultState;
    case(RECEIVE_TOPIC_TAGS):
      return merge({}, state, action.topics);
    default:
      return state;
  }

};
