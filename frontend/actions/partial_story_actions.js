
export const FETCH_RANDOM_STORIES = "FETCH_RANDOM_STORIES";
export const RECEIVE_PARTIAL_STORIES = "RECEIVE_PARTIAL_STORIES";

export const fetchRandomStories = (number) => ({
  type: FETCH_RANDOM_STORIES,
  number: number
});


export const receivePartialStories = (stories) => ({
  type: RECEIVE_PARTIAL_STORIES,
  stories: stories
});
