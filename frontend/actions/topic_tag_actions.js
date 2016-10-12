export const CREATE_TOPIC_TAGS = "CREATE_TOPIC_TAGS";
export const RECEIVE_TOPIC_TAGS = "RECEIVE_TOPIC_TAGS";

export const createTopicTags = (storyId, topicTitles) => ({
  type: CREATE_TOPIC_TAGS,
  storyId: storyId,
  topicTitles: topicTitles
});

export const receiveTopicTags = (topics) => ({
  type: RECEIVE_TOPIC_TAGS,
  topics: topics
});
