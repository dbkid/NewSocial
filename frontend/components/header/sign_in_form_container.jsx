import { connect } from 'react-redux';
import SignInForm from './sign_in_form';
import { login, signup } from '../../actions/session_actions';


const mapStateToProps = state => ({
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  signIn: (user) => dispatch(login(user)),
  signUp: (user) => dispatch(signup(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(SignInForm);
