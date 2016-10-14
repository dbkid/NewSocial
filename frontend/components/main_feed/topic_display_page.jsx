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
    if(this.props.topics.mainTopic){
    return(
      <div className="group">
        <div className="float-left">
          <TopicHeader topics={this.props.topics} createTopicFollow={this.props.createTopicFollow}/>
          <div className="logged-in-story-index">
            <StoryIndex partialStories={this.props.partialStories}/>
          </div>
        </div>

        <SideBar fetchTopicShow={this.props.fetchTopicShow} session={this.props.session}/>


      </div>
    );
  } else{
      return(
      <div className="group">
        <SideBar fetchTopicShow={this.props.fetchTopicShow} session={this.props.session}/>
        <div className="logged-in-story-index">
          <StoryIndex partialStories={this.props.partialStories}/>
        </div>
      </div>
      );

  }

  }



}

export default TopicDisplayPage;
