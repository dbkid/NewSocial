export const fetchAuthorShow = (authorId, success) => {
  $.ajax({
    method: "GET",
    url: `/api/users/${authorId}`,
    success
    }
  );
};

export const editUser = (formData, authorId, success) => {
  $.ajax({
     url: `/api/users/${authorId}`,
     type: 'PATCH',
     processData: false,
     contentType: false,
     dataType: 'json',
     data: formData,
     success
     }
   );
};
