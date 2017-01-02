import { connect } from 'react-redux';
import BookmarkDisplayPage from './bookmark_display_page';


const mapStateToProps = state => ({
  partialStories: state.partialStories,
  author: state.author,
  session: state.session
});

const mapDispatchToProps = dispatch => ({
  editUser: (formData, authorId) => dispatch(editUser(formData, authorId))
});

export default connect(mapStateToProps, mapDispatchToProps)(AuthorDisplayPage);
