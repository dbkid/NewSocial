import { connect } from 'react-redux';
import AuthorDisplayPage from './author_display_page';
import { editUser } from '../../actions/author_actions';



const mapStateToProps = state => ({
  partialStories: state.partialStories,
  author: state.author,
  session: state.session
});

const mapDispatchToProps = dispatch => ({
  editUser: (formData, authorId) => dispatch(editUser(formData, authorId))
});

export default connect(mapStateToProps, mapDispatchToProps)(AuthorDisplayPage);
