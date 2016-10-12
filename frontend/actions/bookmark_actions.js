export const CREATE_BOOKMARK = "CREATE_BOOKMARK";

export const createBookmark = (storyId, userId) => ({
  type: CREATE_BOOKMARK,
  storyId: storyId,
  userId: userId
});
