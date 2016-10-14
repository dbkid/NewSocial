export const CREATE_TOPIC_FOLLOW = "CREATE_TOPIC_FOLLOW";
export const RECEIVE_TOPIC_FOLLOW = "RECEIVE_TOPIC_FOLLOW";
export const FETCH_TOPIC_FOLLOWS = "FETCH_TOPIC_FOLLOWS";
export const RECEIVE_TOPIC_FOLLOWS = "RECEIVE_TOPIC_FOLLOWS";

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

export const fetchTopicFollows = () => {
  return ({
  type: FETCH_TOPIC_FOLLOWS
});
};

export const receiveTopicFollows = (topics) => ({
  type: RECEIVE_TOPIC_FOLLOWS,
  topics: topics
}
);
