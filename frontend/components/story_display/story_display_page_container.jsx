import { connect } from 'react-redux';
import StoryDisplayPage from './story_display_page';
import { fetchSelectedStory } from '../../actions/selected_story_actions';

import { createResponse } from '../../actions/response_actions';


const mapStateToProps = state => ({
  selectedStory: state.selectedStory,
  session: state.session
});

const mapDispatchToProps = dispatch => ({
  fetchSelectedStory: (storyId) => dispatch(fetchSelectedStory(storyId)),
  createResponse: (response) => dispatch(createResponse(response))

});

export default connect(mapStateToProps, mapDispatchToProps)(StoryDisplayPage);
