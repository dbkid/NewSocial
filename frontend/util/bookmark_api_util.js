export const createBookmark = (storyId, userId, success) => {
  $.ajax({
    method: "POST",
    url: `/api/stories/${storyId}/bookmarks`,
    data: { bookmark: {story_id: storyId, user_id: userId} },
    success
    }
  );
};

export const fetchBookmarks = (success) => {
  $.ajax({
    method: "POST",
    url: `/api/stories/${storyId}/bookmarks`,
    success
    }
  );
};
