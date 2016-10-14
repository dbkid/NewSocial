import React from 'react';
import { Link } from 'react-router';
import TopicButton from './topic_button';



class TopicBox extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.fetchTopicFollows();
  }


  render(){

    let buttons = this.props.followedTopics.map((topic, index) => {
      return <TopicButton topic={topic} fetchTopicShow={this.props.fetchTopicShow} key={index}/>;
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
