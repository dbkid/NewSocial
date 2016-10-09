import React from 'react';
import { Link } from 'react-router';

class StoryFormHeader extends React.Component {
  constructor(props){
    super(props);
  }

  render(){

      return(
        <div className="group homepageheader">
          <div className="group topbar">
            <ul className="group logolist">
              <li><img className="logo"></img></li>
                <Link to="/">
                  <li className="NewSocial">NewSocial</li>
                </Link>
            </ul>
            <ul className="group loginlist">
              <li><Link to={`/stories/${this.props.story.id}`} className="greenlink">Publish</Link></li>
            </ul>
          </div>
        </div>
      );


    }

}


export default StoryFormHeader;
