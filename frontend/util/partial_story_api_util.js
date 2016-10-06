export const fetchRandomStories = (number, success) => {
  $.ajax({
    method: "GET",
    url: "/api/stories",
    data: { number: number },
    success
    }
  );
};
