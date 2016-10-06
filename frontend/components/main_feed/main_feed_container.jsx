import { connect } from 'react-redux';
import MainFeed from './main_feed';


const mapStateToProps = state => ({
  partialStories: state.partialStories,
  session: state.session
});

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(MainFeed);
