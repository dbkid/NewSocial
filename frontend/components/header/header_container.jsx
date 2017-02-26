import { connect } from 'react-redux';
import Header from './header';
import { withRouter } from 'react-router';
import { clearSelectedStory } from '../../actions/selected_story_actions';
import { fetchRandomStories } from '../../actions/partial_story_actions';
import { fetchTopicsIndex, fetchTopicShow } from '../../actions/topic_actions';
import { logout, login, signup } from '../../actions/session_actions';

const mapStateToProps = (state, ownProps) => {
  return ({
  currentUser: state.session.currentUser,
  loggedIn: Boolean(state.session.currentUser),
  topics: state.topics
});
};

const mapDispatchToProps = dispatch => ({
  login: (user) => dispatch(login(user)),
  signup: (user) => dispatch(signup(user)),
  logout: () => dispatch(logout()),
  clearSelectedStory: () => dispatch(clearSelectedStory()),
  fetchTopicsIndex: () => dispatch(fetchTopicsIndex()),
  fetchTopicShow: (topicId) => dispatch(fetchTopicShow(topicId)),
  fetchRandomStories: () => dispatch(fetchRandomStories())
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Header));
