import { connect } from 'react-redux';
import StoryFormPage from './story_form';
import { createStory, passStory } from '../../actions/selected_story_actions';


const mapStateToProps = state => ({
  selectedStory: state.selectedStory,
  session: state.session
});

const mapDispatchToProps = dispatch => ({
  createStory: (story) => dispatch(createStory(story)),
  passStory: (story) => dispatch(passStory(story))
});

export default connect(mapStateToProps, mapDispatchToProps)(StoryFormPage);
