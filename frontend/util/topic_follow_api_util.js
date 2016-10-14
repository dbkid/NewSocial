export const createTopicFollow = (topicId, success) => {
  $.ajax({
    method: "POST",
    url: "/api/topicfollows",
    data: { topic_follow: {topic_id: topicId} },
    success
    }
  );
};

export const fetchTopicFollows = (success) => {
  $.ajax({
    method: "GET",
    url: "/api/topicfollows",
    success
    }
  );
};
