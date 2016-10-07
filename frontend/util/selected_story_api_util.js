export const fetchSelectedStory = (storyId, success) => {
  storyId = parseInt(storyId);
  $.ajax({
    method: "GET",
    url: "/api/stories/${storyId}",
    success
    }
  );
};
