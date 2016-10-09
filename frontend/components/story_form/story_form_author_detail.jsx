import React from 'react';
import { Link } from 'react-router';


const StoryFormAuthorDetail = ({ author }) => {
  return (
    <div className="author-detail group">
      <div className="image-thumb-container">
        <Link to={`/authors/${author.id}`}>
          <img src={author.imageUrl} className = "image-thumb"></img>
        </Link>
      </div>
      <div className="name-date-container">
          <Link to={`/authors/${author.id}`} className="greenlink author-detail-name">{author.name}</Link>
      </div>
    </div>
  );

};
export default StoryFormAuthorDetail;
