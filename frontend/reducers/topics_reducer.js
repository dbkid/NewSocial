import { SELECT_MAIN_TOPIC, RECEIVE_FOLLOWED_TOPICS, RECEIVE_TOPICS_INDEX } from '../actions/topic_actions';
import { RECEIVE_TOPIC_FOLLOW } from '../actions/topic_follow_actions';

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
    case(RECEIVE_TOPICS_INDEX):
      return merge(state, {followedTopics: action.topics.followedTopics, randomTopics: action.topics.randomTopics});
    case(RECEIVE_TOPIC_FOLLOW):
      return merge(state, {mainTopic: action.topic.topic, followedTopics: [state.followedTopics].concat[(action.topic.topic)] });

    default:
      return state;
  }

};
