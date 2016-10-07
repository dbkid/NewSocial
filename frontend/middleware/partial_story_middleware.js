import { FETCH_RANDOM_STORIES } from '../actions/partial_story_actions';
import { receivePartialStories } from '../actions/partial_story_actions';
import { fetchRandomStories } from '../util/partial_story_api_util.js';


export default ({ getState, dispatch }) => next => action => {

    const success = (stories) => dispatch(receivePartialStories(stories));
    const error = (errors) => dispatch(receiveErrors(errors));

    switch(action.type){
      case(FETCH_RANDOM_STORIES):
        fetchRandomStories(action.number, success, error);
        return next(action);
      default:
        return next(action);
    }


};
