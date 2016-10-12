import { connect } from 'react-redux';
import StoryFormPage from './story_form_page';
import { createStory, passStory } from '../../actions/selected_story_actions';
import { createTopicTag } from '../../actions/topic_tag_actions';


const mapStateToProps = state => ({
  selectedStory: state.selectedStory,
  session: state.session
});

const mapDispatchToProps = dispatch => ({
  createStory: (story) => dispatch(createStory(story)),
  passStory: (story) => dispatch(passStory(story)),
  logout: () => dispatch(logout()),
  createTopicTag: (storyId, topicTag) => dispatch(createTopicTag(storyId, topicTitle))
});

export default connect(mapStateToProps, mapDispatchToProps)(StoryFormPage);
