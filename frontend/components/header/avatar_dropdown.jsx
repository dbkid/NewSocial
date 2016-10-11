import React from 'react';
import { Link } from 'react-router';
import Modal from 'react-modal';


class AvatarDropdown extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      modalIsOpen: false
    };

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);

  }

  openModal(){
    this.setState({modalIsOpen: true});
  }

  closeModal(){
    this.setState({modalIsOpen: false});
  }


  render(){
    return(
      <label>
        <img src={this.props.currentUser.imageUrl} className = "image-thumb dropdown-thumb"></img>
          <button onClick={this.openModal} className="avatar-dropdown-button">
            <Modal
              isOpen={this.state.modalIsOpen}
              onRequestClose={this.closeModal}
              className="popupcontent"
              overlayClassName="overlay"
              >
              <div></div>
            </Modal>
          </button>
      </label>
    );

  }


}

export default AvatarDropdown;
