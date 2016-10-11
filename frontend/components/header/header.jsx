import React from 'react';
import { Link } from 'react-router';
import Modal from 'react-modal';
import SignInFormContainer from './sign_in_form_container';
import SignUpFormContainer from './sign_up_form_container';




class Header extends React.Component {
  constructor(props){
    super(props);
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
              <li><Link to="/writestory" className="greenlink writestory">Write a story</Link></li>
              <img src={this.props.currentUser.imageUrl} className = "image-thumb dropdown-thumb"></img>
            </ul>
          </div>
          <div className="nav-bar"></div>
        </div>
      );


    }

  }
}

export default Header;
