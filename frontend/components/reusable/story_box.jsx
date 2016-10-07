import React from 'react';


class StoryBox extends React.Component {
  constructor(props){
    super(props);
    this.state = {
    };

  }

  render(){

    return(
      <div className="story-box-box">
        <h1 className = "story-box-title">{this.props.title}</h1>
        <p className="story-box-splice">{this.props.splice}</p>
      </div>
    );

  }



}

export default StoryBox;
