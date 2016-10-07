
export const FETCH_AUTHOR_SHOW = "FETCH_AUTHOR_SHOW";
export const RECEIVE_AUTHOR_INFO = "RECEIVE_AUTHOR_INFO";

export const fetchAuthorShow = (authorId) => ({
  type: FETCH_AUTHOR_SHOW,
  authorId: authorId
});


export const receiveAuthorInfo = (authorInfo) => ({
  type: RECEIVE_AUTHOR_INFO,
  authorInfo: authorInfo
});
