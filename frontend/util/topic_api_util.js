export const fetchTopicShow = (topicId, success) => {
  $.ajax({
    method: "GET",
    url: `/api/topics/${topicId}`,
    success
    }
  );
};
