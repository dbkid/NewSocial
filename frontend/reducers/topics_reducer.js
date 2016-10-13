import { SELECT_MAIN_TOPIC, RECEIVE_FOLLOWED_TOPICS } from '../actions/topic_actions';

import merge from 'lodash/merge';

const defaultState = {
  followedTopics: [],
  randomTopics: [],
  mainTopic: null
};


export const TopicsReducer = (state = defaultState, action) => {

  switch(action.type){
    case(SELECT_MAIN_TOPIC):
      return merge(state, {mainTopic: action.topic});
    case(RECEIVE_FOLLOWED_TOPICS):
      return merge(state, {followedTopics: action.followedTopics});
    default:
      return state;
  }

};
