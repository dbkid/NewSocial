import React from 'react';
import StoryBox from './story_box';

const StoryIndex = ({ partialStories }) => {

  let boxes = partialStories.map((story) => {
    return <StoryBox title={story.title} splice={story.splice} id={story.id}/>
  });


  return (
    <ul className="story-index">
      {boxes}
    </ul>
  );

};
export default StoryIndex;
