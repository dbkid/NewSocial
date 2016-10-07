import React from 'react';

const SelectedStory = ({ selectedStory }) => {

  return (
    <div>
      <h1>{selectedStory.title}</h1>
      <p>{selectedStory.content}</p>
    </div>
  );

};


export default SelectedStory;
