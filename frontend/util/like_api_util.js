export const createLike = (storyId, userId, success) => {
  $.ajax({
    method: "POST",
    url: `/api/stories/${storyId}/likes`,
    data: { like: {story_id: storyId, user_id: userId} },
    success
    }
  );
};
