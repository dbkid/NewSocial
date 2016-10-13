export const FETCH_TOPIC_SHOW = "FETCH_TOPIC_SHOW";
export const SELECT_MAIN_TOPIC = "SELECT_MAIN_TOPIC";
export const RECEIVE_FOLLOWED_TOPICS = "RECEIVE_FOLLOWED_TOPICS";
export const FETCH_TOPICS_INDEX = "FETCH_TOPICS_INDEX";
export const RECEIVE_TOPICS_INDEX = "RECEIVE_TOPICS_INDEX";


export const fetchTopicShow = (topicId) => ({
  type: FETCH_TOPIC_SHOW,
  topicId: topicId
});

export const selectMainTopic = (topic) => ({
  type: SELECT_MAIN_TOPIC,
  topic: topic
});

export const receiveFollowedTopics = (followedTopics) => {
  return ({
  type: RECEIVE_FOLLOWED_TOPICS,
  followedTopics: followedTopics
});
};

export const fetchTopicsIndex = () => ({
  type: FETCH_TOPICS_INDEX
});

export const receiveTopicsIndex = (topics) => ({
  type: RECEIVE_TOPICS_INDEX,
  topics: topics
});
