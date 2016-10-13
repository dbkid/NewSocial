export const CREATE_FOLLOW = "CREATE_FOLLOW";

export const createFollow = (followerId, followedId) => ({
  type: CREATE_FOLLOW,
  followerId: followerId,
  followedId: followedId
});
