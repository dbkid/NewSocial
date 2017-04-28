import React from 'react';
import { Link } from 'react-router';
import StoryIndex  from './../reusable/story_index';
import Header from "./../header/header_container";
import TopicDisplayPage from './../main_feed/topic_display_page';
import NavBar from "./../header/nav_bar";
import BookmarkHeader from "./../header/bookmark_header";
import SideBarContainer from "./../main_feed/sidebar_container";

class BookmarkDisplayPage extends React.Component {
  constructor(props){
    super(props);
    this.state = {
    };

  }

  render(){

    return(
      <div>
        <div className="nav-bar group">
          <NavBar topics={this.props.topics} fetchTopicsIndex={this.props.fetchTopicsIndex} fetchTopicShow={this.props.fetchTopicShow}/>
        </div>
          <div className = "main-feed-border">
            <div className="main-feed">
              <div className="group">
                <div className="float-left">
                  <BookmarkHeader/>
                  <div className="logged-in-story-index">
                    <StoryIndex partialStories={this.props.partialStories}/>
                  </div>
                </div>

                <SideBarContainer />
              </div>
            </div>
          </div>
        </div>

      );

  }

}
// <div>
//   <div >
//     <ul className = "group nav-bar-container">
//       {topics}
//     </ul>
//   </div>
// </div>
  // <div>
  //   <div className="nav-bar group">
  //     <NavBar topics={this.props.topics} fetchTopicsIndex={this.props.fetchTopicsIndex} fetchTopicShow={this.props.fetchTopicShow}/>
  //   </div>
  //   <div className = "main-feed-border">
  //     <div className="main-feed">
  //       <div className="group">
  //         <div className="float-left">
  //           <BookmarkHeader/>
  //           <div className="logged-in-story-index">
  //             <StoryIndex partialStories={this.props.partialStories}/>
  //           </div>
  //         </div>
  //
  //         <SideBarContainer />
  //       </div>
  //     </div>
  //   </div>
  // </div>





export default BookmarkDisplayPage;
