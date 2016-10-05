import React from 'react';
import { Link } from 'react-router';


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
              <li className="newsocial">NewSocial</li>
            </ul>

            <ul className="group loginlist">
              <li className="greywritestory loginbutton"><Link to="/#/signup">Write a story</Link></li>
              <li className="greenlink loginbutton"><Link to="/#/login">Sign in /</Link></li>
              <li className="greenlink loginbutton signup"><Link to="/#/signup">Sign up</Link></li>
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
