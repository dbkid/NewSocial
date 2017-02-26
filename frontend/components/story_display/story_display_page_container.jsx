import { connect } from 'react-redux';
import StoryDisplayPage from './story_display_page';
import { fetchSelectedStory } from '../../actions/selected_story_actions';

import { createResponse } from '../../actions/response_actions';
import { createLike } from '../../actions/like_actions';
import { createBookmark } from '../../actions/bookmark_actions';
import { fetchTopicShow } from '../../actions/topic_actions';


const mapStateToProps = state => ({
  selectedStory: state.selectedStory,
  session: state.session
});

const mapDispatchToProps = dispatch => ({
  fetchSelectedStory: (storyId) => dispatch(fetchSelectedStory(storyId)),
  createResponse: (response) => dispatch(createResponse(response)),
  createLike: (storyId, userId) => dispatch(createLike(storyId, userId)),
  createBookmark: (storyId, userId) => dispatch(createBookmark(storyId, userId)),
  fetchTopicShow: (topicId) => dispatch(fetchTopicShow(topicId))
});

export default connect(mapStateToProps, mapDispatchToProps)(StoryDisplayPage);
