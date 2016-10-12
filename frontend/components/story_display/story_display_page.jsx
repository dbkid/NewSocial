import React from 'react';
import SelectedStory from './selected_story';
import Header from "./../header/header_container";
import ResponseForm from "./response_form";
import ResponseIndex from './response_index';
import StoryDisplayFooter from './story_display_footer';
import StoryDisplayAuthorHeader from './story_display_author_header';




class StoryDisplayPage extends React.Component {
  constructor(props){
    super(props);
    this.state = {
    };

  }


  render(){

    return(
      <div>
        <StoryDisplayAuthorHeader author={this.props.selectedStory.author} authorPic={this.props.selectedStory.authorPic} date={this.props.selectedStory.date}/>
        <SelectedStory selectedStory = {this.props.selectedStory}/>
        <StoryDisplayFooter storyId={this.props.selectedStory.id} user={this.props.session.currentUser} createLike={this.props.createLike} likeCount={this.props.selectedStory.likeCount} liked={this.props.selectedStory.liked} createBookmark={this.props.createBookmark} bookmarked={this.props.selectedStory.bookmarked}/>
        <ResponseForm currentUser={this.props.session.currentUser} storyId={this.props.selectedStory.id} createResponse={this.props.createResponse}/>
        <ResponseIndex responses={this.props.selectedStory.responses} storyId={this.props.selectedStory.id}/>
      </div>
    );

  }

}

export default StoryDisplayPage;
