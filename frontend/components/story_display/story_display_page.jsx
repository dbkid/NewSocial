import React from 'react';
import SelectedStory from './selected_story';
import Header from "./../header/header_container";
import ResponseForm from "./response_form";
import ResponseIndex from './response_index';
import StoryDisplayFooter from './story_display_footer';



class StoryDisplayPage extends React.Component {
  constructor(props){
    super(props);
    this.state = {
    };

  }


  render(){

    return(
      <div>
        <SelectedStory selectedStory = {this.props.selectedStory}/>
        <ResponseForm currentUser={this.props.session.currentUser} storyId={this.props.selectedStory.id} createResponse={this.props.createResponse}/>
        <ResponseIndex responses={this.props.selectedStory.responses} storyId={this.props.selectedStory.id}/>
        <StoryDisplayFooter storyId={this.props.selectedStory.id} user={this.props.session.currentUser} createLike={this.props.createLike}/>
      </div>
    );

  }

}

export default StoryDisplayPage;
