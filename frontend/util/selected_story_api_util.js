export const fetchSelectedStory = (storyId, success) => {
  $.ajax({
    method: "GET",
    url: `/api/stories/${storyId}`,
    success
    }
  );
};

export const createStory = (story, success) => {
  $.ajax({
    method: "POST",
    url: "/api/stories",
    data: { story: {title: story.title, content: story.content, author_id: story.author.id} },
    success
    }
  );
};
