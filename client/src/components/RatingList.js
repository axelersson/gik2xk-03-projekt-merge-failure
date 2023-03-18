import RatingItemSmall from "./RatingItemSmall";
import { useEffect, useState } from "react";
import { getAll } from "../models/RatingsModel";

function RatingList() {
  const [ratings, setRatings] = useState([]);

  useEffect(() => {
    getAll().then((ratings) => setRatings(ratings));
  }, []);
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
