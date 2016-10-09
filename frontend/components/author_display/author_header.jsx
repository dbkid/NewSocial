import React from 'react';
import { Link } from 'react-router';


class AuthorHeader extends React.Component {
  constructor(props){
    super(props);
    this.state = {
    };

  }

  render(){

    return(
      <div className="author-header">
        <div className="author-box group">
          <h1 className="author-name">{this.props.author.name}</h1>
          <img src={this.props.author.imageUrl} className = "image-profile"></img>
        </div>
      </div>

    );

  }



}

export default AuthorHeader;
