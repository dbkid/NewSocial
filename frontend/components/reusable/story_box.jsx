import React from 'react';
import { Link } from 'react-router';


class StoryBox extends React.Component {
  constructor(props){
    super(props);
    this.state = {
    };

  }

  render(){

    return(
      <div className="story-box-box">
         <Link to={`/stories/${this.props.id}`} >
            <h1 className = "story-box-title">{this.props.title}</h1>
            <p className="story-box-splice">{this.props.splice}</p>
          </Link>
      </div>
    );

  }



}

export default StoryBox;
