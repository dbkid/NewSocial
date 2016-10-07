
export const FETCH_SELECTED_STORY = "FETCH_SELECTED_STORY";
export const RECEIVE_SELECTED_STORY = "RECEIVE_SELECTED_STORY";

export const fetchSelectedStory = (storyId) => ({
  type: FETCH_SELECTED_STORY,
  storyId: storyId
});

export const receiveSelectedStory = (story) => ({
  type: RECEIVE_SELECTED_STORY,
  story: story
});
