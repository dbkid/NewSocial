import React from 'react';
import TopicButton from './../main_feed/topic_button';



class NavBar extends React.Component {
  constructor(props){
    super(props);
    this.state = {
    };

  }

  componentDidMount(){
    this.props.fetchTopicsIndex();
  }


  render(){

    let topics = this.props.topics.randomTopics.map((topic) => {
      return <TopicButton topic={topic} fetchTopicShow={this.props.fetchTopicShow}/>;
    });

    return(
      <div >
        <ul>
          {topics}
        </ul>
      </div>
    );

  }

}

export default NavBar;
