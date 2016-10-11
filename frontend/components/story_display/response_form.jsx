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
    return this.setState({ ["content"]: "", ["author"]: this.props.currentUser, ["storyId"]: this.props.storyId })
  }

  render(){

    return(
      <div className="story-box-box group" id="response-form-box">
         <AuthorDetail author={this.props.currentUser} storyDate={null} storyId={this.props.storyId} className="response-author-detail"/>
         <form className="response-form">
           <textarea placeholder= "Write a response..." onChange={this.updateContent} value={this.state.content} className="response-form-text"></textarea>
           <button className="round-button save-button" onClick={this.createResponse} id="publish-button">Publish</button>
         </form>
      </div>
    );

  }



}

export default ResponseForm;
