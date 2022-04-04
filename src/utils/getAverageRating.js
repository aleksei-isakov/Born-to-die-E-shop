const getAverageRating = function (feedbacks) {
  if (!feedbacks || feedbacks.length === 0) {
    return 0;
  }

  return (
    feedbacks.reduce((acc, currentValue) => {
      return acc + currentValue.rating;
    }, 0) / feedbacks.length
  );
};

export default getAverageRating;
