import React from 'react';
import { Link } from 'react-router';
import PublishDropdown from './publish_dropdown';
import Modal from 'react-modal';
import AvatarDropdown from './../header/avatar_dropdown';

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
            <ul className="group publish-list">
              <PublishDropdown createStory={this.props.createStory} story={this.props.story} createTopicTags={this.props.createTopicTags} currentUser={this.props.currentUser}/>
              <AvatarDropdown currentUser={this.props.currentUser} logout={this.props.logout}/>
            </ul>
          </div>
        </div>
      );


    }

}


export default StoryFormHeader;
