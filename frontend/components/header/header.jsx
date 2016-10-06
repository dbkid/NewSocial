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
              <SignInFormContainer/>
              <SignUpFormContainer/>
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
