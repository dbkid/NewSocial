import { FETCH_RANDOM_STORIES } from '../actions/partial_story_actions';
import { receivePartialStories } from '../actions/partial_story_actions';
import { fetchRandomStories } from '../util/partial_story_api_util.js';
import { createLike } from '../util/like_api_util';
import { CREATE_LIKE } from '../actions/like_actions';


export default ({ getState, dispatch }) => next => action => {

    const success = (stories) => dispatch(receivePartialStories(stories));
    const error = (errors) => dispatch(receiveErrors(errors));

    switch(action.type){
      case(FETCH_RANDOM_STORIES):
        fetchRandomStories(action.number, success, error);
        return next(action);
      case(CREATE_LIKE):
        createLike(action.storyId, action.userId, success);
        return next(action);
      default:
        return next(action);
    }


};
