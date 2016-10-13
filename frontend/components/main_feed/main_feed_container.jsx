import { connect } from 'react-redux';
import MainFeed from './main_feed';


const mapStateToProps = state => ({
  partialStories: state.partialStories,
  session: state.session,
  topics: state.topics
});

const mapDispatchToProps = dispatch => ({
  fetchRandomStories: (number) => dispatch(fetchRandomStories(number)),
  fetchTopicShow: (topicId) => dispatch(fetchTopicShow(topicId))
});

export default connect(mapStateToProps, mapDispatchToProps)(MainFeed);
