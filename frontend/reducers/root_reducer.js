import { combineReducers } from 'redux';
import { SessionReducer } from './session_reducer';
import { PartialStoryReducer } from './partial_story_reducer';
import { SelectedStoryReducer } from './selected_story_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  partialStories: PartialStoryReducer,
  selectedStory: SelectedStoryReducer
});

export default RootReducer;
