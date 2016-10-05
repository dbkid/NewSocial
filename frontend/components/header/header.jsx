
import React from 'react';
import { Link } from 'react-router';


class Header extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    if (this.props.currentUser === null){

      return(
        <ul>
          <li><img className="logo"></img></li>
          <li className="NewSocial">NewSocial</li>
        </ul>
        <ul>
          <li><Link to="/#/signup" className="greenlink">Sign Up</Link></li>
          <li><Link to="/#/login" className="greenlink">Sign In</Link></li>
        </ul>
      );
    } else {

      return(
        <ul>
          <li><img className="logo"></img></li>
          <li className="NewSocial">NewSocial</li>
        </ul>
        <ul>
          <li><Link to="/#/writestory" className="greenlink">Write Story</Link></li>
        </ul>
      )


    }

}

export default Header;
