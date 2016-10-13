export const createFollow = (followerId, followedId, success) => {
  $.ajax({
    method: "POST",
    url: `/api/follows`,
    data: { follow: {follower_id: followerId, followed_id: followedId} },
    success
    }
  );
};
