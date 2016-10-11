import React from 'react';
import { Link } from 'react-router';
import Modal from 'react-modal';


class PublishDropdown extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      modalIsOpen: false
    };

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);

    this.createStory = this.createStory.bind(this);
  }

  openModal(){
    this.setState({modalIsOpen: true});
  }

  closeModal(){
    this.setState({modalIsOpen: false});
  }



  createStory(e){
    debugger
    e.preventDefault();
    this.props.createStory(this.props.story);
  }

  render(){
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
                <li onClick={this.createStory} className="save-button round-button publish-dropdown-button"><Link to={`/stories/${this.props.story.id}`} className="greenlink">Publish</Link></li>
            </Modal>
        </Link>
      </li>

    );

  }


}

export default PublishDropdown;
