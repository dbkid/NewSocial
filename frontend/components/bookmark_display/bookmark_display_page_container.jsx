import { connect } from 'react-redux';
import { fetchTopicsIndex } from '../../actions/topic_actions';
import { fetchRandomStories } from '../../actions/partial_story_actions';
import { fetchTopicShow } from '../../actions/topic_actions';
import { createTopicFollow, deleteTopicFollow } from '../../actions/topic_follow_actions';
import BookmarkDisplayPage from './bookmark_display_page';
import { fetchBookmarks } from "../../actions/bookmark_actions";

const mapStateToProps = state => ({
  partialStories: state.partialStories,
  session: state.session,
  topics: state.topics
});

const mapDispatchToProps = dispatch => ({
  fetchRandomStories: (number) => dispatch(fetchRandomStories(number)),
  fetchTopicShow: (topicId) => dispatch(fetchTopicShow(topicId)),
  fetchTopicsIndex: () => dispatch(fetchTopicsIndex()),
  createTopicFollow: (topicId) => dispatch(createTopicFollow(topicId)),
  deleteTopicFollow: (topicId) => dispatch(deleteTopicFollow(topicId)),
  fetchBookmarks: () => dispatch(fetchBookmarks())
});

export default connect(mapStateToProps, mapDispatchToProps)(BookmarkDisplayPage);
