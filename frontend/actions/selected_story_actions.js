
export const FETCH_SELECTED_STORY = "FETCH_SELECTED_STORY";
export const RECEIVE_SELECTED_STORY = "RECEIVE_SELECTED_STORY";
export const CREATE_STORY = "CREATE_STORY";
export const PASS_STORY = "PASS_STORY";

export const fetchSelectedStory = (storyId) => ({
  type: FETCH_SELECTED_STORY,
  storyId: storyId
});

export const receiveSelectedStory = (story) => ({
  type: RECEIVE_SELECTED_STORY,
  story: story
});

export const createStory = (story) => ({
  type: CREATE_STORY,
  story: story
});

export const passStory = (story) => ({
  type: PASS_STORY,
  story: story
});
