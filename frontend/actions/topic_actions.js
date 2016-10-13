export const FETCH_TOPIC_SHOW = "FETCH_TOPIC_SHOW";
export const SELECT_MAIN_TOPIC = "SELECT_MAIN_TOPIC";
export const RECEIVE_FOLLOWED_TOPICS = "RECEIVE_FOLLOWED_TOPICS";


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
