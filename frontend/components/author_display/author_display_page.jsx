import React from 'react';
import { Link } from 'react-router';
import  StoryIndex  from '../reusable/story_index';


class AuthorDisplayPage extends React.Component {
  constructor(props){
    super(props);
    this.state = {
    };

  }


  render(){
    return(
      <div>
        <StoryIndex partialStories={this.props.partialStories}/>
      </div>
    );

  }



}

export default AuthorDisplayPage;
