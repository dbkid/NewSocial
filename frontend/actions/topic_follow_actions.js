export const CREATE_TOPIC_FOLLOW = "CREATE_TOPIC_FOLLOW";
export const RECEIVE_TOPIC_FOLLOW = "RECEIVE_TOPIC_FOLLOW";

export const createTopicFollow = (topicId) => {
  return ({
  type: CREATE_TOPIC_FOLLOW,
  topicId: topicId
});
};

export const receiveTopicFollow = (topic) => {
  return ({
  type: RECEIVE_TOPIC_FOLLOW,
  topic: topic
});
};
