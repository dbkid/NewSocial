import React from 'react';
import { Link } from 'react-router';


const AuthorDetail = ({ author, storyDate }) => {


  return (
    <div className="author-detail">
      <div className="image-thumb-container">
        <Link to={`/authors/${author.id}`}>
          <img src={author.imageUrl} className = "image-thumb"></img>
        </Link>
      </div>
      <Link to={`/authors/${author.id}`} className="greenlink author-name">{author.name}</Link>

    </div>
  );

};
export default AuthorDetail;
