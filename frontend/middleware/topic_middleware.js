import { FETCH_TOPICS_INDEX, receiveTopicsIndex } from '../actions/topic_actions';
import { fetchTopicsIndex } from '../util/topic_api_util.js';

export default ({ getState, dispatch }) => next => action => {

    const success = (data) => {
      dispatch(receiveTopicsIndex(data));
    };

    const error = (errors) => dispatch(receiveErrors(errors));

    switch(action.type){
      case(FETCH_TOPICS_INDEX):
        fetchTopicsIndex(success, error);
        return next(action);
      default:
        return next(action);
    }


};
