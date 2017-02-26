import { connect } from 'react-redux';
import MainFeed from './main_feed';
import { fetchTopicsIndex } from '../../actions/topic_actions';
import { fetchRandomStories } from '../../actions/partial_story_actions';
import { fetchTopicShow } from '../../actions/topic_actions';
import { createTopicFollow, deleteTopicFollow } from '../../actions/topic_follow_actions';





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
  deleteTopicFollow: (topicId) => dispatch(deleteTopicFollow(topicId))
});

export default connect(mapStateToProps, mapDispatchToProps)(MainFeed);
