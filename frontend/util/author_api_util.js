export const fetchAuthorShow = (authorId, success) => {
  $.ajax({
    method: "GET",
    url: `/api/users/${authorId}`,
    success
    }
  );
};
