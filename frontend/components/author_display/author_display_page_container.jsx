import { connect } from 'react-redux';
import AuthorDisplayPage from './author_display_page';


const mapStateToProps = state => ({
  partialStories: state.partialStories,
  author: state.author,
  session: state.session
});

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(AuthorDisplayPage);
