import React from 'react';
import TopicButton from './../main_feed/topic_button';



class NavBar extends React.Component {
  constructor(props){
    super(props);
    this.state = {
    };

    this.fetchTopicShow = this.fetchTopicShow.bind(this);

  }

  componentDidMount(){
    this.props.fetchTopicsIndex();
  }

  fetchTopicShow(e){
    e.preventDefault();
    this.props.fetchTopicShow(e.target.value);
  }


  render(){

    let topics = this.props.topics.randomTopics.map((topic) => {
      return <li className="nav-bar-button" onClick={this.fetchTopicShow} value={topic.id}>{topic.title}</li>;
    });

    return(
      <div >
        <ul className = "group nav-bar-container">
          {topics}
        </ul>
      </div>
    );

  }

}

export default NavBar;
