export const CREATE_LIKE = "CREATE_LIKE";

export const createLike = (storyId, userId) => ({
  type: CREATE_LIKE,
  storyId: storyId,
  userId: userId
});
