import React from 'react';
import LikeButton from "./../reusable/like_button";
import BookmarkButton from "./../reusable/bookmark_button";
import { Link } from 'react-router';
import TopicButton from "./../main_feed/topic_button";

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

    let topicLinks = [];
    if (this.props.topics){

      this.props.topics.forEach((topic) => {
        topicLinks.push(<li className="topic-position"><TopicButton topic={topic} fetchTopicShow={this.props.fetchTopicShow}/></li>);
      });
    }

    if (this.props.user === null){
      return(<div></div>);
    }
    else{
      return(
        <div className="story-display-footer-background">
        <div className="story-display-footer">
          <div className="story-display-footer-content group">

            <ul className="story-display-topic-bar group">
              {topicLinks}
            </ul>

            <ul className="like-bookmark-container group">
              <li className="like"><LikeButton storyId={this.props.storyId} user={this.props.user} liked={this.props.liked} createLike={this.props.createLike}/></li>
              <li className="count"><text className="like-count">{this.props.likeCount}</text></li>
              <li className="bookmark"><BookmarkButton storyId={this.props.storyId} user={this.props.user} bookmarked={this.props.bookmarked} createBookmark={this.props.createBookmark}/></li>
            </ul>
          </div>
        </div>
        </div>
      );

    }

  }
}

export default StoryDisplayFooter;
