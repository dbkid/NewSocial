export const fetchSelectedStory = (storyId, success) => {
  $.ajax({
    method: "GET",
    url: `/api/stories/${storyId}`,
    data: { story: {story_id: storyId } },
    success
    }
  );
};

export const createStory = (story, topicTitles, authorId, success) => {
  $.ajax({
    method: "POST",
    url: "/api/stories",
    data: { story: {title: story.title, content: story.content, author_id: authorId, topic_titles: topicTitles} },
    success
    }
  );
};
