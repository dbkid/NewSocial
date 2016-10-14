import React from 'react';
import { Link } from 'react-router';
import  StoryIndex  from '../reusable/story_index';
import Header from "./../header/header_container";
import TopicDisplayPage from './topic_display_page';
import GetStartedFormContainer from './get_started_form_container';
import NavBar from "./../header/nav_bar";




class MainFeed extends React.Component {
  constructor(props){
    super(props);
    this.state = {
    };

    this.fetchRandomStories = this.fetchRandomStories.bind(this);


  }

  componentDidMount(){
    this.fetchRandomStories();
  }

  fetchRandomStories(){
    this.props.fetchRandomStories();
  }


  render(){


    if (this.props.session.currentUser === null){

      return(
          <div>
            <div className = "main-feed-border">
              <div className="main-feed-image">
                <img src={window.newSocialAssets.firstImage}></img>
                <div className="main-feed-image-writing">
                  <h1 className="main-feed-image-writing-large">Move thinking forward.</h1>
                  <text className="main-feed-image-writing-medium">NewSocial is a community of readers and writers offering unique perspectives on ideas large and small.</text>
                  <text className="main-feed-image-writing-small">Sign up to read and interact with what matters most to you.</text>
                  <GetStartedFormContainer/>
                </div>
              </div>
              <div className="main-feed">
                <StoryIndex partialStories={this.props.partialStories}/>
              </div>
            </div>
          </div>
      );
    }

    else {
    return(

      <div>
        <div className="nav-bar group">
          <NavBar topics={this.props.topics} fetchTopicsIndex={this.props.fetchTopicsIndex} fetchTopicShow={this.props.fetchTopicShow}/>
        </div>
        <div className = "main-feed-border">
          <div className="main-feed">
            <TopicDisplayPage topics={this.props.topics} session={this.props.session} partialStories={this.props.partialStories} fetchTopicShow={this.props.fetchTopicShow} fetchRandomStories={this.props.fetchRandomStories} createTopicFollow={this.props.createTopicFollow}/>
          </div>
        </div>
      </div>

      );

    }

  }



}

export default MainFeed;
