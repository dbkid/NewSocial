import React from 'react';
import { Link } from 'react-router';
import AuthorDetail from '../reusable/author_detail';


class ResponseForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
    };

  }

  render(){

    return(
      <div className="story-box-box group">
         <AuthorDetail author={this.props.currentUser} storyDate={null} storyId={this.props.storyId}/>
         <form className="response-form">
           <input type="text"></input>
           <button className="round-button save-button">Publish</button>
         </form>
      </div>
    );

  }



}

export default ResponseForm;
