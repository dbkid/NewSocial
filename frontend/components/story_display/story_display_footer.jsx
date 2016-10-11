import React from 'react';


class StoryDisplayFooter extends React.Component {
  constructor(props){
    super(props);
    this.state = {
    };

    this.createLike = this.createLike.bind(this);

  }

  createLike(e){
    e.preventDefault();
    this.props.createLike(this.props.storyId, this.props.user.id);
  }


  render(){

    if (this.props.user === null){
      return(<div></div>);
    }
    else{
      return(
        <div>
          <button onClick={this.createLike}>Like</button>
        </div>
      );

    }

  }
}

export default StoryDisplayFooter;
