import React from 'react';
import { Link } from 'react-router';
import AuthorDetail from './author_detail';


class StoryBox extends React.Component {
  constructor(props){
    super(props);
    this.state = {
    };

  }

  render(){

    return(
      <div className="story-box-box">
         <AuthorDetail author={this.props.story.author} storyDate={this.props.story.created_at}/>
         <Link to={`/stories/${this.props.story.id}`} >
            <h1 className = "story-box-title">{this.props.story.title}</h1>
            <p className="story-box-splice">{this.props.story.splice}</p>
          </Link>
      </div>
    );

  }



}

export default StoryBox;
