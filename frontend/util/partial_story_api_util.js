export const fetchRandomStories = (number, success, error) => {
  $.ajax({
    method: "GET",
    url: "/api/stories",
    data: { number: number },
    success,
    error
    }
  );
};
