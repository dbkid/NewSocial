import { connect } from 'react-redux';
import SignUpForm from './sign_up_form';
import { signup, login } from '../../actions/session_actions';


const mapStateToProps = state => ({
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  signIn: (user) => dispatch(login(user)),
  signUp: (user) => dispatch(signup(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUpForm);
