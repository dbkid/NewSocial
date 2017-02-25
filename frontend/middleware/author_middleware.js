import { FETCH_AUTHOR_SHOW, EDIT_USER } from '../actions/author_actions';
import { fetchAuthorShow, editUser } from '../util/author_api_util.js';
import { receivePartialStories } from '../actions/partial_story_actions';
import { receiveAuthorInfo } from '../actions/author_actions';
import { receiveCurrentUser } from '../actions/session_actions';


export default ({ getState, dispatch }) => next => action => {

    const success = (data) => {
      dispatch(receiveAuthorInfo(data.author));
      dispatch(receivePartialStories(data.partialStories));
      return;
    };

    const editUserSuccess = (data) => {
      dispatch(receiveCurrentUser(data));
      return;
    }


    const error = (errors) => dispatch(receiveErrors(errors));

    switch(action.type){
      case(FETCH_AUTHOR_SHOW):
        fetchAuthorShow(action.authorId, success, error);
        return next(action);
      case(EDIT_USER):
        editUser(action.formData, action.authorId, editUserSuccess);
        return next(action);
      default:
        return next(action);
    }


};
