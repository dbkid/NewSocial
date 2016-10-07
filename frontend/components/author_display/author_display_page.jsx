import React from 'react';
import { Link } from 'react-router';
import  StoryIndex  from '../reusable/story_index';
import AuthorHeader from './author_header';


class AuthorDisplayPage extends React.Component {
  constructor(props){
    super(props);
    this.state = {
    };

  }


  render(){
    return(
      <div>
        <AuthorHeader author={this.props.author}/>
        <div className="latest-container group">
          <h3 className="latest">Latest</h3>
        </div>
        <StoryIndex partialStories={this.props.partialStories}/>
      </div>
    );

  }



}

export default AuthorDisplayPage;
