import { FETCH_SELECTED_STORY, CREATE_STORY } from '../actions/selected_story_actions';
import { receiveSelectedStory } from '../actions/selected_story_actions';
import { fetchSelectedStory, createStory } from '../util/selected_story_api_util.js';
import { createResponse } from '../util/response_api_util';
import { CREATE_RESPONSE } from '../actions/response_actions';
import { createLike } from '../util/like_api_util';
import { CREATE_LIKE } from '../actions/like_actions';
import { createBookmark } from '../util/bookmark_api_util';
import { CREATE_BOOKMARK } from '../actions/bookmark_actions';
import { CREATE_TOPIC_TAGS, receiveTopicTags } from '../actions/topic_tag_actions';
import { createTopicTags } from '../util/topic_tag_api_util';
import { hashHistory } from 'react-router';


export default ({ getState, dispatch }) => next => action => {

    const success = (story) => dispatch(receiveSelectedStory(story));
    const error = (errors) => dispatch(receiveErrors(errors));

    const reroutesuccess = (story) => {
      dispatch(receiveSelectedStory(story));
      hashHistory.push(`/stories/${story.id}`);
    }

    const topicTagSuccess = (topics) => dispatch(receiveTopicTags(topics));

    switch(action.type){
      case(FETCH_SELECTED_STORY):
        fetchSelectedStory(action.storyId, success, error);
        return next(action);
      case(CREATE_STORY):
        createStory(action.story, action.topicTitles, reroutesuccess, error);
        return next(action);
      case(CREATE_RESPONSE):
        createResponse(action.response, action.response.storyId, success);
        return next(action);
      case(CREATE_LIKE):
        createLike(action.storyId, action.userId, success);
        return next(action);
      case(CREATE_BOOKMARK):
        createBookmark(action.storyId, action.userId, success);
        return next(action);
      case(CREATE_TOPIC_TAGS):
        createTopicTags(action.storyId, action.topicTitles, topicTagSuccess);
        return next(action);
      default:
        return next(action);
    }


};
