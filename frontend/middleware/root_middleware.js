import { applyMiddleware } from 'redux';
import SessionMiddleware from './session_middleware';
import PartialStoryMiddleware from './partial_story_middleware';

const RootMiddleware = applyMiddleware(
  SessionMiddleware,
  PartialStoryMiddleware
);

export default RootMiddleware;
