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
              className="avatar-dropdown-popup"
              overlayClassName="avatar-dropdown-overlay"
              >
                <div className="avatar-dropdown-arrow"></div>
                <ul>
                  <li className="dropdown-list-item" onClick={this.closeModal}><Link to={`/authors/${this.props.currentUser.id}`}>Profile</Link></li>
                  <li className="dropdown-list-item" onClick={this.closeModal}><Link>Bookmarks</Link></li>
                  <li className="dropdown-list-item" onClick={this.closeModal}><Link>Topics</Link></li>
                  <li className="dropdown-list-item" onClick={this.closeModal}><Link>Follows</Link></li>
                  <li className="dropdown-list-item" onClick={this.props.logout}><Link>Sign Out</Link></li>
                </ul>

            </Modal>
          </button>
      </label>
    );

  }


}

export default AvatarDropdown;
