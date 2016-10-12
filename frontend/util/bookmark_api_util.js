export const createBookmark = (storyId, userId, success) => {
  $.ajax({
    method: "POST",
    url: `/api/stories/${storyId}/bookmarks`,
    data: { bookmark: {story_id: storyId, user_id: userId} },
    success
    }
  );
};
