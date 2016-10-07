import React from 'react';

const SelectedStory = ({ selectedStory }) => {

  return (
    <div>
      <h1 className="selected-story-title">{selectedStory.title}</h1>
      <p className="selected-story-content">{selectedStory.content}</p>
    </div>
  );

};


export default SelectedStory;
