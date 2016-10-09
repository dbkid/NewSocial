import React from 'react';

const SelectedStory = ({ selectedStory }) => {

  return (
    <div className="selected-story-background">
      <div className="selected-story-box">
        <h1 className="selected-story-title">{selectedStory.title}</h1>
        <p className="selected-story-content">{selectedStory.content}</p>
      </div>
    </div>
  );

};


export default SelectedStory;
