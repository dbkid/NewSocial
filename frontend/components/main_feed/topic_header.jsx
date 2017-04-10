import React from 'react';
import { Link } from 'react-router';


class TopicHeader extends React.Component {
  constructor(props){
    super(props);
    this.state = {

    };

  this.createTopicFollow = this.createTopicFollow.bind(this);
  this.checkIfTopicFollowed = this.checkIfTopicFollowed.bind(this);
  this.deleteTopicFollow = this.deleteTopicFollow.bind(this);

  }

  createTopicFollow(e){
    e.preventDefault();
    this.props.createTopicFollow(e.target.value);
  }

  deleteTopicFollow(e){
    e.preventDefault();
    this.props.deleteTopicFollow(e.currentTarget.value);
  }

  checkIfTopicFollowed(){
    var followed = false;
    this.props.topics.followedTopics.forEach(topic => {
      if (topic.id === this.props.topics.mainTopic.id){
        followed = true;
      }
    })
    return followed;
  }


  render(){
    if (this.checkIfTopicFollowed()){
      return(
        <div className="topic-header group">
          <h1 className="tagged-in">TAGGED IN</h1>
          <h1 className="topic-title">{this.props.topics.mainTopic.title}</h1>
          <button className="save-button round-button  follow-button" value={this.props.topics.mainTopic.id}>Following</button>
        </div>
      )
    } else{
      return(
        <div className="topic-header group">
          <h1 className="tagged-in">TAGGED IN</h1>
          <h1 className="topic-title">{this.props.topics.mainTopic.title}</h1>
          <button className="save-button round-button  follow-button" value={this.props.topics.mainTopic.id} onClick={this.createTopicFollow}>Follow</button>
        </div>
      );

    }





  }



}

export default TopicHeader;
