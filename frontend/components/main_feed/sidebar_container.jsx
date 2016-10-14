import { connect } from 'react-redux';
import MainFeed from './main_feed';
import { fetchTopicsIndex } from '../../actions/topic_actions';
import { fetchRandomStories } from '../../actions/partial_story_actions';
import { fetchTopicShow } from '../../actions/topic_actions';
import { createTopicFollow, fetchTopicFollows } from '../../actions/topic_follow_actions';
import  SideBar  from './sidebar';


const mapStateToProps = (state) => {
  return {

    followedTopics: state.topics.followedTopics
  };
};

const mapDispatchToProps = dispatch => ({
  fetchRandomStories: (number) => dispatch(fetchRandomStories(number)),
  fetchTopicShow: (topicId) => dispatch(fetchTopicShow(topicId)),
  fetchTopicsIndex: () => dispatch(fetchTopicsIndex()),
  createTopicFollow: (topicId) => dispatch(createTopicFollow(topicId)),
  fetchTopicFollows: () => dispatch(fetchTopicFollows())
});

export default connect(mapStateToProps, mapDispatchToProps)(SideBar);
