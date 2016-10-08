import React from 'react';
import { Link } from 'react-router';


const AuthorDetail = ({ author, storyDate }) => {


  return (
    <div>
      <Link to={`/authors/${author.id}`} className="greenlink">{author.name}</Link>
      <img src={author.imageUrl}></img>
    </div>
  );

};
export default AuthorDetail;
