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
        <form>
          <h1 placeholder="Title" onChange={this.updateTitle}></h1>
          <textarea placeholder="Tell your story..." onChange={this.updateContent}></textarea>
        </form>
      </div>
    );

  }

}

export default StoryForm;
