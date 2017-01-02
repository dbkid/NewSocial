export const CREATE_BOOKMARK = "CREATE_BOOKMARK";
export const FETCH_BOOKMARKS = "FETCH_BOOKMARKS";


export const createBookmark = (storyId, userId) => ({
  type: CREATE_BOOKMARK,
  storyId: storyId,
  userId: userId
});


export const fetchBookmarks = () => ({
  type: FETCH_BOOKMARKS
});
