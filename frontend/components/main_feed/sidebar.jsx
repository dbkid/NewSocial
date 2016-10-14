import React from 'react';
import { Link } from 'react-router';
import TopicBox from './topic_box';



class SideBar extends React.Component {
  constructor(props){
    super(props);
    this.state = {
    };

  }


  render(){
    return(
      <div className="sidebar">
        <TopicBox followedTopics={this.props.followedTopics} fetchTopicShow={this.props.fetchTopicShow} fetchTopicFollows={this.props.fetchTopicFollows}/>
      </div>
    );

  }



}


export default SideBar;
