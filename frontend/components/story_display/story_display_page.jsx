import React from 'react';
import SelectedStory from './selected_story';
import Header from "./../header/header_container";



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
      </div>
    );

  }

}

export default StoryDisplayPage;
