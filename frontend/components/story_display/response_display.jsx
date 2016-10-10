import React from 'react';
import { Link } from 'react-router';
import AuthorDetail from '../reusable/author_detail';


class ResponseDisplay extends React.Component {
  constructor(props){
    super(props);
    this.state = {
    };

  }

  render(){

    return(
      <div className="story-box-box group">
         <AuthorDetail author={this.props.response.author} storyDate={this.props.response.date} storyId={this.props.storyId}/>
            <p className="story-box-splice">{this.props.response.content}</p>
      </div>
    );

  }



}

export default ResponseDisplay;
