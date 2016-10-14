import { FETCH_TOPICS_INDEX, receiveTopicsIndex } from './../actions/topic_actions';
import { createTopicFollow } from './../util/topic_follow_api_util.js';
import { CREATE_TOPIC_FOLLOW, receiveTopicFollow, FETCH_TOPIC_FOLLOWS, receiveTopicFollows } from './../actions/topic_follow_actions';
import { hashHistory } from 'react-router';
import { fetchTopicsIndex } from './../util/topic_api_util';
import { fetchTopicFollows } from './../util/topic_follow_api_util';

export default ({ getState, dispatch }) => next => action => {

    const success = (data) => {
      dispatch(receiveTopicsIndex(data));
      hashHistory.push("/");

    };

    const topicFollowSuccess = (topics) => {
      dispatch(receiveTopicFollows(topics));

      return;

    };

    const fetchTopicFollowsSuccess = (topics) => {
      dispatch(receiveTopicFollows(topics));
    }

    const error = (errors) => dispatch(receiveErrors(errors));

    switch(action.type){
      case(FETCH_TOPICS_INDEX):
        fetchTopicsIndex(success, error);
        return next(action);
      case(CREATE_TOPIC_FOLLOW):
        createTopicFollow(action.topicId, topicFollowSuccess);
        return next(action);
      case(FETCH_TOPIC_FOLLOWS):
        fetchTopicFollows(fetchTopicFollowsSuccess);
        return next(action);
      default:
        return next(action);
    }


};
