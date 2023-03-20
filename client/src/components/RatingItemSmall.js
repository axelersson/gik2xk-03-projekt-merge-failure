import { Rating, Typography } from "@mui/material";

function RatingItemSmall({ hej }) {
  const rating = hej.rating;
  return (
    <>
      <div>
        {console.log(rating)}
        <Typography component="legend">{rating.createdAt}</Typography>
        <Rating name="customized-10" value={rating.rating} max={10} />
      </div>
    </>
  );
}

export default RatingItemSmall;

/* format(` */
/* import { format } from "date-fns"; */
