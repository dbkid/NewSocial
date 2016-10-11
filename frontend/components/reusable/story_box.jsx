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

    let response = "";
    if ( this.props.story.response_count === 1 ){
      response = "response";
    } else {
      response = "responses";
    }

    return(
      <div className="story-box-box group">
         <AuthorDetail author={this.props.story.author} storyDate={this.props.story.date} storyId={this.props.story.id}/>
         <Link to={`/stories/${this.props.story.id}`} >
            <h1 className = "story-box-title">{this.props.story.title}</h1>
            <p className="story-box-splice">{this.props.story.splice}</p>
            <text className="response-count">{this.props.story.response_count} {response}</text>
          </Link>

      </div>
    );

  }



}

export default StoryBox;
