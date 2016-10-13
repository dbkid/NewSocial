import React from 'react';
import { Link } from 'react-router';
import TopicButton from './topic_button';



class TopicBox extends React.Component {
  constructor(props){
    super(props);
    this.state = {
    };

  }


  render(){

    let buttons = this.props.session.currentUser.followedTopics.map((topic) => {
      return <TopicButton topic={topic} fetchTopicShow={this.props.fetchTopicShow}/>;
    });

    return(
      <div>
        <h1 className="topics-you-follow">Topics you follow:</h1>
          <ul >
            {buttons}
          </ul>
      </div>
    );

  }



}

export default TopicBox;
