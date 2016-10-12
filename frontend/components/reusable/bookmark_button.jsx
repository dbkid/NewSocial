import React from 'react';


class BookmarkButton extends React.Component {
  constructor(props){
    super(props);
    this.state = {
    };

    this.createBookmark = this.createBookmark.bind(this);

  }

  createBookmark(e){
    e.preventDefault();
    this.props.createBookmark(this.props.storyId, this.props.user.id);
  }


  render(){
    if (this.props.user === null){
      return(<div></div>);
    }
    else if (this.props.bookmarked === true ){
      return(
        <div>
          <img src={window.newSocialAssets.bookmark} className="heart"></img>
        </div>
      );
    }
    else{
      return(
        <div>
          <label> <img src={window.newSocialAssets.bookmark} className="heart"></img>
            <button onClick={this.createBookmark} className="hidden-like-button">Like</button>
          </label>
        </div>
      );
    }
  }

}

export default BookmarkButton;
