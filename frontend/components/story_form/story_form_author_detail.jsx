import React from 'react';
import { Link } from 'react-router';


const StoryFormAuthorDetail = ({ author }) => {
  return (
    <div className="author-detail group">
      <div className="image-thumb-container">
        <Link to={`/authors/${author.id}`}>
          <img src={author.imageUrl} className = "story-form-image-thumb"></img>
        </Link>
      </div>
      <div className="name-date-container">
          <Link to={`/authors/${author.id}`} className="story-form-author-detail-name">{author.name}</Link>
          <text className="story-form-author-detail-draft">Draft</text>
      </div>
    </div>
  );

};
export default StoryFormAuthorDetail;
