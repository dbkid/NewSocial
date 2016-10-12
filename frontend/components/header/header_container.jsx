import { connect } from 'react-redux';
import Header from './header';
import { withRouter } from 'react-router';
import { clearSelectedStory } from '../../actions/selected_story_actions';


const mapStateToProps = (state, ownProps) => {
  return ({
  currentUser: state.session.currentUser,
  loggedIn: Boolean(state.session.currentUser)
});
};

const mapDispatchToProps = dispatch => ({
  login: (user) => dispatch(login(user)),
  signup: (user) => dispatch(signup(user)),
  logout: () => dispatch(logout()),
  clearSelectedStory: () => dispatch(clearSelectedStory())
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Header));
