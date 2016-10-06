import React from 'react';
import { Link } from 'react-router';
import Modal from 'react-modal';
import SignInForm from './sign_in_form';



class Header extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    console.log(this.state);
    if (this.props.currentUser === null){

      return(
        <div className="group homepageheader">
          <div className="group topbar">
            <ul className="group logolist">
              <li className="newsocial">NewSocial</li>
            </ul>

            <ul className="group loginlist">
              <li className="greywritestory loginbutton"><Link to="/#/writestory">Write a story</Link></li>
              <SignInForm/>
              <li className="greenlink loginbutton signup"><a href="#" onClick={this.openModal}>Sign up</a></li>
            </ul>
          </div>
        </div>
      );
    } else {

      return(
        <div className="group homepageheader">
          <div className="group topbar">
            <ul className="group logolist">
              <li><img className="logo"></img></li>
              <li className="NewSocial">NewSocial</li>
            </ul>
            <ul className="group loginlist">
              <li><Link to="/#/writestory" className="greenlink">Write a story</Link></li>
            </ul>
          </div>
        </div>
      );


    }

  }
}

export default Header;
