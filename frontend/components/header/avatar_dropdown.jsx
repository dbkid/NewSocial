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
    // </button>
    // <button  className="avatar-dropdown-button">
    const visibility = this.state.dropdown === true ? "" : "invisible";
    // if(this.state.dropdown === true){
      return(
      <li>
        <img src={this.props.currentUser.imageUrl} onClick={this.toggleDropdown} className = "image-thumb dropdown-thumb"></img>
            <div className={`avatar-dropdown-popup group ${visibility}`}>
                <div className="avatar-dropdown-arrow"></div>
                <ul>
                  <li className="dropdown-list-item" onClick={this.toggleDropdown}><Link to={`/authors/${this.props.currentUser.id}`}>Profile</Link></li>
                  <li className="dropdown-list-item" onClick={this.props.logout}><Link>Sign Out</Link></li>
                </ul>
            </div>
      </li>
      );
    // // } else {
    //   return(
    //   <li>
    //     <img src={this.props.currentUser.imageUrl} onClick={this.toggleDropdown} className = "image-thumb dropdown-thumb"></img>
    //   </li>
    //   );
    // }
    // <button  className="avatar-dropdown-button">
    // </button>
  }


}

export default AvatarDropdown;
