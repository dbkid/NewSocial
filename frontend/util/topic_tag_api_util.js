export const createTopicTags = (storyId, topicTitles, success) => {
  $.ajax({
    method: "POST",
    url: "/api/topictags",
    data: { topic_tag: {story_id: storyId, topic_titles: topicTitles} },
    success
    }
  );
};
