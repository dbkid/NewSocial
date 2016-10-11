import React from 'react';
import { Link } from 'react-router';
import PublishDropdown from './publish_dropdown';
import Modal from 'react-modal';

class StoryFormHeader extends React.Component {
  constructor(props){
    super(props);

    this.createStory = this.createStory.bind(this);
  }

  createStory(e){
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
              <PublishDropdown/>
            </ul>
          </div>
        </div>
      );


    }

}


export default StoryFormHeader;
