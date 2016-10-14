import { connect } from 'react-redux';
import Header from './header';
import { withRouter } from 'react-router';
import { clearSelectedStory } from '../../actions/selected_story_actions';


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
