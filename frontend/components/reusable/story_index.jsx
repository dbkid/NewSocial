import React from 'react';
import StoryBox from './story_box';

const StoryIndex = ({ partialStories }) => {

  let boxes = partialStories.map((story, index) => {
    return <StoryBox story={story} key={index}/>
  });


  return (
    <ul className="story-index">
      {boxes}
    </ul>
  );

};
export default StoryIndex;
