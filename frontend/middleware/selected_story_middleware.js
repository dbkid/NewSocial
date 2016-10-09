import { FETCH_SELECTED_STORY, CREATE_STORY } from '../actions/selected_story_actions';
import { receiveSelectedStory } from '../actions/selected_story_actions';
import { fetchSelectedStory, createStory } from '../util/selected_story_api_util.js';


export default ({ getState, dispatch }) => next => action => {

    const success = (story) => dispatch(receiveSelectedStory(story));
    const error = (errors) => dispatch(receiveErrors(errors));

    switch(action.type){
      case(FETCH_SELECTED_STORY):
        fetchSelectedStory(action.storyId, success, error);
        return next(action);
      case(CREATE_STORY):
        createStory(action.story, success, error);
        return next(action);
      default:
        return next(action);
    }


};
