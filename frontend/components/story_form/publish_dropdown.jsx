import React from 'react';
import { Link } from 'react-router';
import Modal from 'react-modal';


class PublishDropdown extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      modalIsOpen: false,
      topicTitle1: "",
      submit1: false
    };

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);

    this.createStory = this.createStory.bind(this);
    this.createTopicTag = this.createTopicTag.bind(this);
    this.updateTopicTitle1 = this.updateTopicTitle1.bind(this);
    this.submitTopicTitle1 = this.submitTopicTitle1.bind(this);
  }

  openModal(){
    this.setState({modalIsOpen: true});
  }

  closeModal(){
    this.setState({modalIsOpen: false});
  }

  createStory(e){
    e.preventDefault();
    this.props.createStory(this.props.story);
  }

  createTopicTag(e){
    e.preventDefault();
    this.props.createTopicTag(this.props.story.id, e.target.value);
  }

  updateTopicTitle1(e){
    e.preventDefault();
    this.setState( { topicTitle1: e.target.value });
  }

  submitTopicTitle1(e){
    e.preventDefault();
    this.setState( { topicTitle1: this.state.topicTitle1, submit1: true });
  }


  render(){

    if(this.state.submit1 === false){

      return(
        <li onClick={this.openModal}><Link className="greenlink writestory">Publish
              <Modal
                isOpen={this.state.modalIsOpen}
                onRequestClose={this.closeModal}
                className="avatar-dropdown-popup group"
                overlayClassName="avatar-dropdown-overlay"
                >
                  <div className="avatar-dropdown-arrow"></div>
                  <h2 className="ready-to-publish">Ready to publish?</h2>
                  <text className="add-or-change-tags">Add or change tags (up to 5) so your story reaches more people:</text>
                  <form onSubmit={this.submitTopicTitle1}>
                    <input type="text" onChange={this.updateTopicTitle1}></input>
                  </form>

                  <li onClick={this.createStory} className="save-button round-button publish-dropdown-button"><Link to={`/stories/${this.props.story.id}`} className="greenlink">Publish</Link></li>
              </Modal>
          </Link>
        </li>

    );

  }
  else if (this.state.submit1 === true){
    return(
      <li onClick={this.openModal}><Link className="greenlink writestory">Publish
            <Modal
              isOpen={this.state.modalIsOpen}
              onRequestClose={this.closeModal}
              className="avatar-dropdown-popup group"
              overlayClassName="avatar-dropdown-overlay"
              >
                <div className="avatar-dropdown-arrow"></div>
                <h2 className="ready-to-publish">Ready to publish?</h2>
                <text className="add-or-change-tags">Add or change tags (up to 5) so your story reaches more people:</text>
                <button className="submitted-topic-title">{`${this.state.topicTitle1}   `}
                <text className="button-x">x</text>
                </button>
                <li onClick={this.createStory} className="save-button round-button publish-dropdown-button"><Link to={`/stories/${this.props.story.id}`} className="greenlink">Publish</Link></li>
            </Modal>
        </Link>
      </li>

    );

  }
}


}

export default PublishDropdown;
