export const FETCH_TOPIC_SHOW = "FETCH_TOPIC_SHOW";

export const fetchTopicShow = (topicId) => ({
  type: FETCH_TOPIC_SHOW,
  topicId: topicId
});
