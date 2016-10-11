import React from 'react';


class LikeButton extends React.Component {
  constructor(props){
    super(props);
    this.state = {
    };

    this.createLike = this.createLike.bind(this);

  }

  createLike(e){
    e.preventDefault();
    this.props.createLike(this.props.storyId, this.props.user.id);
  }


  render(){
    if (this.props.user === null){
      return(<div></div>);
    }
    else if (this.props.liked === true ){
      return(
        <div className="like-button">
          <img src={window.newSocialAssets.likedHeart} className="heart"></img>
        </div>
      );
    }
    else{
      return(
        <div className="like-button">
          <label> <img src={window.newSocialAssets.heart} className="heart"></img>
            <button onClick={this.createLike} className="hidden-like-button">Like</button>
          </label>
        </div>
      );
    }
  }

}

export default LikeButton;
