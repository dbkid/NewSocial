import React from 'react';
import { Link } from 'react-router';



class TopicHeader extends React.Component {
  constructor(props){
    super(props);
    this.state = {
    };

  }


  render(){
    return(
      <div className="topic-header group">
        <h1 className="tagged-in">TAGGED IN</h1>
        <h1 className="topic-title">{this.props.topics.mainTopic.title}</h1>
        <button className="save-button round-button  follow-button">Follow</button>
      </div>
    );

  }



}

export default TopicHeader;
