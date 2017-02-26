import React from 'react';
import ResponseDisplay from './response_display';

const ResponseIndex = ({ responses, storyId }) => {

  let boxes = responses.map((response, index) => {
    return <ResponseDisplay response={response} storyId={storyId} key={index}/>
  });


  return (
    <ul className="story-index">
      {boxes}
    </ul>
  );

};
export default ResponseIndex;
