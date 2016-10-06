import React from 'react';
import { Link } from 'react-router';
import  StoryIndex  from '../reusable/story_index';



class MainFeed extends React.Component {
  constructor(props){
    super(props);
    this.state = {
    };

    this.fetchRandomStories = this.fetchRandomStories.bind(this);


  }

  componentDidMount(){
    this.fetchRandomStories();
  }

  fetchRandomStories(){
    this.props.fetchRandomStories();
  }


  render(){
    return(
      <StoryIndex partialStories={this.props.partialStories}/>
    );

  }



}

export default MainFeed;
