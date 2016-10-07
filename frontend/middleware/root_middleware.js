import { applyMiddleware } from 'redux';
import SessionMiddleware from './session_middleware';
import PartialStoryMiddleware from './partial_story_middleware';
import SelectedStoryMiddleware from './selected_story_middleware';
import AuthorMiddleware from './author_middleware';

const RootMiddleware = applyMiddleware(
  SessionMiddleware,
  PartialStoryMiddleware,
  SelectedStoryMiddleware,
  AuthorMiddleware
);

export default RootMiddleware;
