import React from 'react';
import { Link } from 'react-router';



class TopicButton extends React.Component {
  constructor(props){
    super(props);
    this.state = {
    };

  this.fetchTopicShow = this.fetchTopicShow.bind(this);


  }

  fetchTopicShow(e){
    e.preventDefault();
    this.props.fetchTopicShow(this.props.topic.id);
  }


  render(){
    return(
      <div>
        <button onClick={this.fetchTopicShow}>{this.props.topic.title}</button>
      </div>
    );

  }



}

export default TopicButton;
