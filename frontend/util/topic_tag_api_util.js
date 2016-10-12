export const createTopicTag = (storyId, topicTitle, success) => {
  $.ajax({
    method: "POST",
    url: "/api/topictags",
    data: { topic_tag: {story_id: storyId, topic_title: topicTitle} },
    success
    }
  );
};
