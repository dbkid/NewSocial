import { connect } from 'react-redux';
import GetStartedForm from './get_started_form';
import { signup } from '../../actions/session_actions';


const mapStateToProps = state => ({
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  signIn: (user) => dispatch(login(user)),
  signUp: (user) => dispatch(signup(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(GetStartedForm);
