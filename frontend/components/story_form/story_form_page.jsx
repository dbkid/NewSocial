import React from 'react';
import StoryFormAuthorDetail from './story_form_author_detail';
import StoryFormHeader from './story_form_header';
import StoryForm from './story_form';


class StoryFormPage extends React.Component {
  constructor(props){
    super(props);
    this.state = {
    };

  }


  render(){

    return(
      <div>
        <StoryFormHeader session={this.props.session} story={this.props.selectedStory} createStory={this.props.createStory}/>
        <StoryFormAuthorDetail author={this.props.session.currentUser}/>
        <StoryForm story={this.props.selectedStory} passStory={this.props.passStory} author={this.props.session.currentUser/} >
      </div>
    );

  }

}

export default StoryFormPage;
