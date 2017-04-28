import React from 'react';
import { Link } from 'react-router';


class BookmarkHeader extends React.Component {
  constructor(props){
    super(props);
  }


  render(){
      return(
        <div className="topic-header group">
          <h1 className="tagged-in">TAGGED IN</h1>
          <h1 className="topic-title">Bookmarks</h1>
        </div>
      );
  }

}


export default BookmarkHeader;
