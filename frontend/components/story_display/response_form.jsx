import React from 'react';
import { Link } from 'react-router';
import AuthorDetail from '../reusable/author_detail';


class ResponseForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      content: null,
      author: this.props.currentUser,
      storyId: this.props.storyId
    };

    this.updateContent = this.updateContent.bind(this);
    this.createResponse = this.createResponse.bind(this);

  }

  updateContent(e){
    e.preventDefault();
    let content = e.target.value;
    return this.setState({ ["content"]: content, ["author"]: this.props.currentUser, ["storyId"]: this.props.storyId });
  }

  createResponse(e){
    e.preventDefault();
    this.props.createResponse(this.state);
  }

  render(){

    return(
      <div className="story-box-box group">
         <AuthorDetail author={this.props.currentUser} storyDate={null} storyId={this.props.storyId}/>
         <form className="response-form">
           <input type="text" onChange={this.updateContent}></input>
           <button className="round-button save-button" onClick={this.createResponse}>Publish</button>
         </form>
      </div>
    );

  }



}

export default ResponseForm;
