export const fetchSelectedStory = (storyId, success) => {
  $.ajax({
    method: "GET",
    url: `/api/stories/${storyId}`,
    success
    }
  );
};
