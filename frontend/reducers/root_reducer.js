import { combineReducers } from 'redux';
import { SessionReducer } from './session_reducer';
import { PartialStoryReducer } from './partial_story_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  partialStories: PartialStoryReducer
});

export default RootReducer;
