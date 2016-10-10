import React from 'react';
import { Link } from 'react-router';

class StoryFormHeader extends React.Component {
  constructor(props){
    super(props);

    this.createStory = this.createStory.bind(this);
  }

  createStory(e){
    debugger
    e.preventDefault();
    this.props.createStory(this.props.story);
  }

  render(){
      return(
        <div className="group story-form-header">
          <div className="group topbar">
            <ul className="group logolist">
              <li><img className="logo"></img></li>
                <Link to="/">
                  <li className="NewSocial">NewSocial</li>
                </Link>
            </ul>
            <ul className="group loginlist">
              <li onClick={this.createStory}><Link to={`/stories/${this.props.story.id}`} className="greenlink">Publish</Link></li>
            </ul>
          </div>
        </div>
      );


    }

}


export default StoryFormHeader;
