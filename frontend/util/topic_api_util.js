export const fetchTopicShow = (topicId, success) => {
  $.ajax({
    method: "GET",
    url: `/api/topics/${topicId}`,
    success
    }
  );
};

export const fetchTopicsIndex = (success) => {
  $.ajax({
    method: "GET",
    url: `/api/topics`,
    success
    }
  );
};
