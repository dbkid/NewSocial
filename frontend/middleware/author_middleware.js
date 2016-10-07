import { FETCH_AUTHOR_SHOW } from '../actions/author_actions';
import { fetchAuthorShow } from '../util/author_api_util.js';
import { receivePartialStories } from '../actions/partial_story_actions';
import { receiveAuthorInfo } from '../actions/author_actions';



export default ({ getState, dispatch }) => next => action => {

    const success = (data) => {
      dispatch(receiveAuthorInfo(data.author));
      dispatch(receivePartialStories(data.partialStories));
      return;
    };

    const error = (errors) => dispatch(receiveErrors(errors));

    switch(action.type){
      case(FETCH_AUTHOR_SHOW):
        fetchAuthorShow(action.authorId, success, error);
        return next(action);
      default:
        return next(action);
    }


};
