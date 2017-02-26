import { connect } from 'react-redux';
import StoryFormPage from './story_form_page';
import { createStory, passStory } from '../../actions/selected_story_actions';
import { createTopicTags } from '../../actions/topic_tag_actions';
import { logout } from '../../actions/session_actions';


const mapStateToProps = state => ({
  selectedStory: state.selectedStory,
  session: state.session
});

const mapDispatchToProps = dispatch => ({
  createStory: (story, topicTitles, authorId) => dispatch(createStory(story, topicTitles, authorId)),
  passStory: (story) => dispatch(passStory(story)),
  logout: () => dispatch(logout()),
  createTopicTags: (storyId, topicTitles) => dispatch(createTopicTags(storyId, topicTitles))
});

export default connect(mapStateToProps, mapDispatchToProps)(StoryFormPage);
