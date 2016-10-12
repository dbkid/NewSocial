export const CREATE_TOPIC_TAG = "CREATE_TOPIC_TAG";
export const RECEIVE_TOPIC_TAGS = "RECEIVE_TOPIC_TAGS";

export const createTopicTag = (storyId, topicTitle) => ({
  type: CREATE_TOPIC_TAG,
  storyId: storyId,
  topicTitle: topicTitle
});

export const receiveTopicTags = (topics) => ({
  type: RECEIVE_TOPIC_TAGS,
  topics: topics
});
