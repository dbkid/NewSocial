export const createResponse = (response, storyId, success) => {
  $.ajax({
    method: "POST",
    url: `/api/stories/${storyId}/responses`,
    data: { response: {content: response.content, author_id: response.author.id} },
    success
    }
  );
};
