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
      <div>
        <TopicBox session={this.props.session} fetchTopicShow={this.props.fetchTopicShow}/>
      </div>
    );

  }



}

export default SideBar;
