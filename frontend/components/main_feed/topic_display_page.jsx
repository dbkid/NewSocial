import React from 'react';
import { Link } from 'react-router';
import  StoryIndex  from '../reusable/story_index';
import TopicHeader from './topic_header';
import SideBar from './sidebar';




class TopicDisplayPage extends React.Component {
  constructor(props){
    super(props);
    this.state = {
    };

  }


  render(){
    return(
      <div>
        <TopicHeader topics={this.props.topics}/>
        <SideBar fetchTopicShow={this.props.fetchTopicShow} session={this.props.session}/>
        <StoryIndex partialStories={this.props.partialStories}/>

      </div>
    );

  }



}

export default TopicDisplayPage;
