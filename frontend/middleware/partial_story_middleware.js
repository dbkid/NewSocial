import { FETCH_RANDOM_STORIES } from '../actions/partial_story_actions';
import { receivePartialStories } from '../actions/partial_story_actions';
import { fetchRandomStories } from '../util/partial_story_api_util.js';
import { createLike } from '../util/like_api_util';
import { CREATE_LIKE } from '../actions/like_actions';
import { FETCH_TOPIC_SHOW, selectMainTopic } from '../actions/topic_actions';
import { fetchTopicShow } from '../util/topic_api_util';
import { hashHistory } from 'react-router';
import { FETCH_BOOKMARKS } from "../actions/bookmark_actions";
import { fetchBookmarks } from "../util/bookmark_api_util";


export default ({ getState, dispatch }) => next => action => {

    const success = (stories) => dispatch(receivePartialStories(stories));
    const error = (errors) => dispatch(receiveErrors(errors));

    const topicShowSuccess = (data) => {
          dispatch(receivePartialStories(data.partialStories));
          dispatch(selectMainTopic(data.topic));
          hashHistory.push("/");
          return;
        };

    const fetchRandomSuccess = (stories) => {
      dispatch(receivePartialStories(stories));
      dispatch(selectMainTopic(null));
      hashHistory.push("/");
      return;
    };

    switch(action.type){
      case(FETCH_RANDOM_STORIES):
        fetchRandomStories(action.number, fetchRandomSuccess, error);
        return next(action);
      case(FETCH_TOPIC_SHOW):
        fetchTopicShow(action.topicId, topicShowSuccess, error);
        return next(action);
      case(FETCH_BOOKMARKS):
        fetchBookmarks(success, error);
        return next(action);
      default:
        return next(action);
    }


};
