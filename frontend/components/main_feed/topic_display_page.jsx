import React from 'react';
import { Link } from 'react-router';
import  StoryIndex  from '../reusable/story_index';
import TopicHeader from './topic_header';
import SideBarContainer from './sidebar_container';




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

        <SideBarContainer />


      </div>
    );
  } else{
      return(
      <div className="group">
        <SideBarContainer />
        <div className="logged-in-story-index">
          <StoryIndex partialStories={this.props.partialStories}/>
        </div>
      </div>
      );

  }

  }



}

export default TopicDisplayPage;
