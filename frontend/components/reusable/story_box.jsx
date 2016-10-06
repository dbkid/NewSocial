import React from 'react';


class StoryBox extends React.Component {
  constructor(props){
    super(props);
    this.state = {
    };

  }

  render(){

    return(
      <div>
        <h1>{this.props.title}</h1>
        <p>{this.props.splice}</p>
      </div>
    );

  }



}

export default StoryBox;
