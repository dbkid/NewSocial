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

  }

  openModal(){
    this.setState({modalIsOpen: true});
  }

  closeModal(){
    this.setState({modalIsOpen: false});
  }


  render(){
    return(
      <li onClick={this.openModal}><Link className="greenlink">Publish
            <Modal
              isOpen={this.state.modalIsOpen}
              onRequestClose={this.closeModal}
              className="avatar-dropdown-popup"
              overlayClassName="avatar-dropdown-overlay"
              >
                <div className="avatar-dropdown-arrow"></div>

            </Modal>
        </Link>
      </li>

    );

  }


}

export default PublishDropdown;
