import RatingItemSmall from "./RatingItemSmall";

function RatingList() {
  const ratings = [
    {
      id: 1,
      rating: 7.5,
      createdAt: "2023-03-16T13:05:10.000Z",
      updatedAt: "2023-03-16T13:05:10.000Z",
      productId: 2,
    },
    {
      id: 2,
      rating: 6.39,
      createdAt: "2023-03-16T13:46:35.000Z",
      updatedAt: "2023-03-16T13:46:35.000Z",
      productId: 2,
    },
    {
      id: 3,
      rating: 2,
      createdAt: "2023-03-16T13:49:26.000Z",
      updatedAt: "2023-03-16T13:49:26.000Z",
      productId: 2,
    },
  ];
  return (
    <ul>
      {ratings &&
        ratings.map((rating) => {
          return (
            <li key={`ratingId_${rating.id}`}>
              <RatingItemSmall rating={rating} />
            </li>
          );
        })}
    </ul>
  );
}

export default RatingList;
