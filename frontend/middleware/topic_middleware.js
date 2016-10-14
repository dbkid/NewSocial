import { FETCH_TOPICS_INDEX, receiveTopicsIndex } from './../actions/topic_actions';
import { createTopicFollow } from './../util/topic_follow_api_util.js';
import { CREATE_TOPIC_FOLLOW, receiveTopicFollow } from './../actions/topic_follow_actions';
import { hashHistory } from 'react-router';
import { fetchTopicsIndex } from './../util/topic_api_util';


export default ({ getState, dispatch }) => next => action => {

    const success = (data) => {
      dispatch(receiveTopicsIndex(data));
    };

    const topicFollowSuccess = (topic) => {
      dispatch(receiveTopicFollow(topic));
      hashHistory.push("/");

    };

    const error = (errors) => dispatch(receiveErrors(errors));

    switch(action.type){
      case(FETCH_TOPICS_INDEX):
        fetchTopicsIndex(success, error);
        return next(action);
      case(CREATE_TOPIC_FOLLOW):
        createTopicFollow(action.topicId, topicFollowSuccess);
        return next(action);
      default:
        return next(action);
    }


};
