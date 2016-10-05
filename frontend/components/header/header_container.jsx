import { connect } from 'react-redux';
import Header from './header';


const mapStateToProps = state => ({
  currentUser: state.session.currentUser
});

// const mapDispatchToProps = dispatch => ({
// });

export default connect(mapStateToProps)(Header);
