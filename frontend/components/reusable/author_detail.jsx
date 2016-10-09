import React from 'react';
import { Link } from 'react-router';


const AuthorDetail = ({ author, storyDate, storyId }) => {


  return (
    <div className="author-detail group">
      <div className="image-thumb-container">
        <Link to={`/authors/${author.id}`}>
          <img src={author.imageUrl} className = "image-thumb"></img>
        </Link>
      </div>
      <div className="name-date-container">
          <Link to={`/authors/${author.id}`} className="greenlink author-detail-name">{author.name}</Link>
          <Link to={`/stories/${storyId}`} className="date">{storyDate}</Link>
      </div>
    </div>
  );

};
export default AuthorDetail;
