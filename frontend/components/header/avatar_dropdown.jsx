import React from 'react';
import { Link } from 'react-router';
import Modal from 'react-modal';


class AvatarDropdown extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      dropdown: false

    };

    this.toggleDropdown = this.toggleDropdown.bind(this);

  }

  toggleDropdown(e){
    e.preventDefault();
    if(this.state.dropdown === false){
      this.setState({dropdown: true});
    }else{
      this.setState({dropdown: false});
    }
  }


  render(){

    if(this.state.dropdown === true){
      return(
      <label>
        <img src={this.props.currentUser.imageUrl} className = "image-thumb dropdown-thumb"></img>
          <button onClick={this.toggleDropdown} className="avatar-dropdown-button">
            <div className="avatar-dropdown-popup group">
                <div className="avatar-dropdown-arrow"></div>
                <ul>
                  <li className="dropdown-list-item"><Link to={`/authors/${this.props.currentUser.id}`}>Profile</Link></li>
                  <li className="dropdown-list-item"><Link>Bookmarks</Link></li>
                  <li className="dropdown-list-item"><Link>Topics</Link></li>
                  <li className="dropdown-list-item"><Link>Follows</Link></li>
                  <li className="dropdown-list-item" onClick={this.props.logout}><Link>Sign Out</Link></li>
                </ul>
            </div>
          </button>
      </label>
      );
    } else {
      return(
      <label>
        <img src={this.props.currentUser.imageUrl} className = "image-thumb dropdown-thumb"></img>
          <button onClick={this.toggleDropdown} className="avatar-dropdown-button">
          </button>
      </label>
      );
    }
  }


}

export default AvatarDropdown;
