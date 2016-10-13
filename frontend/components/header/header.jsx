import React from 'react';
import { Link } from 'react-router';
import Modal from 'react-modal';
import SignInFormContainer from './sign_in_form_container';
import SignUpFormContainer from './sign_up_form_container';
import AvatarDropdown from './avatar_dropdown';
import NavBar from './nav_bar';




class Header extends React.Component {
  constructor(props){
    super(props);

    this.clearSelectedStory = this.clearSelectedStory.bind(this);
    this.guestLogin = this.guestLogin.bind(this);
  }

  clearSelectedStory(e){
    e.preventDefault();
    this.props.clearSelectedStory();
  }

  guestLogin(e){
    this.props.login({email: "guest@guest.com", password: "password"});
  }


  render(){

     if (this.props.currentUser === null){

      return(
        <div className="group homepageheader">
          <div className="group topbar">
            <ul className="group logolist">
              <Link to="/">
                <li className="newsocial">NewSocial</li>
              </Link>
            </ul>

            <ul className="group loginlist">
              <li className="greenlink loginbutton guest" onClick={this.guestLogin}>Guest / </li>
              <SignInFormContainer/>
              <SignUpFormContainer/>
            </ul>
          </div>
          <div className="nav-bar"></div>
        </div>
      );
    } else {

      return(
        <div className="group homepageheader">
          <div className="group topbar">
            <ul className="group logolist">
              <li><img className="logo"></img></li>
                <Link to="/">
                  <li className="NewSocial">NewSocial</li>
                </Link>
            </ul>
            <ul className="group logged-in-list">
              <li onClick={this.clearSelectedStory}><Link to="/writestory" className="greenlink writestory">Write a story</Link></li>
              <AvatarDropdown currentUser={this.props.currentUser} logout={this.props.logout}/>
            </ul>
          </div>
          <div className="nav-bar">
            <NavBar topics={this.props.topics} fetchTopicsIndex={this.props.fetchTopicsIndex} fetchTopicShow={this.props.fetchTopicShow}/>
          </div>
        </div>
      );


    }

  }
}

export default Header;
