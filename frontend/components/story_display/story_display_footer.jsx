import React from 'react';
import LikeButton from "./../reusable/like_button";

class StoryDisplayFooter extends React.Component {
  constructor(props){
    super(props);
    this.state = {
    };

    this.createLike = this.createLike.bind(this);

  }

  createLike(e){
    e.preventDefault();
    this.props.createLike(this.props.storyId, this.props.user.id);
  }


  render(){

    if (this.props.user === null){
      return(<div></div>);
    }
    else{
      return(
        <div className="story-display-footer">
          <div className="story-display-footer-content group">
            <ul className="like-container">
              <li><LikeButton storyId={this.props.storyId} user={this.props.user} liked={this.props.liked} createLike={this.props.createLike}/></li>
              <li><text className="like-count">{this.props.likeCount}</text></li>
            </ul>
          </div>
        </div>
      );

    }

  }
}

export default StoryDisplayFooter;
