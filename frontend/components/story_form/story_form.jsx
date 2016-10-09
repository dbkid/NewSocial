import React from 'react';


class StoryForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      title: "Title",
      content: "Tell your story...",
      author: this.props.author
    };

    this.updateTitle = this.updateTitle.bind(this);
    this.updateContent = this.updateContent.bind(this);

  }

  updateTitle(e){
    e.preventDefault();
    let title = e.target.value;
    this.setState({
      ["title"]: title, ['content']: this.state.content, ['author']: this.state.author });
    this.props.passStory(this.state);
  }

  updateContent(e){
    e.preventDefault();
    let content = e.target.value;
    this.setState({
      ["title"]: this.state.title, ['content']: content, ['author']: this.state.author });
    this.props.passStory(this.state);
  }


  render(){

    return(
      <div>
        <form className="story-form group">
              <textarea placeholder="Title" onChange={this.updateTitle} className="story-form-title"></textarea>
              <textarea placeholder="Tell your story..." onChange={this.updateContent} className="story-form-content"></textarea>
        </form>
      </div>
    );

  }

}

export default StoryForm;
