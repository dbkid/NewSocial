import React from 'react';
import { Link } from 'react-router';


class StoryDisplayAuthorHeader extends React.Component {
  constructor(props){
    super(props);
    this.state = {
    };

  }

  render(){

    return(
      <div className="story-display-author-header-background">
      <div className="story-display-author-header group">
        <div className="story-display-image-thumb-container">
          <Link to={`/authors/${this.props.author.id}`}>
            <img src={this.props.authorPic} className = "story-display-image-thumb"></img>
          </Link>
        </div>
        <div className="story-display-name-date-container">
            <Link to={`/authors/${this.props.author.id}`} className="story-display-author-name">{this.props.author.name}</Link>
            <text className="story-display-date">{this.props.date}</text>
        </div>
      </div>
      </div>
    );

  }




}

export default StoryDisplayAuthorHeader;
