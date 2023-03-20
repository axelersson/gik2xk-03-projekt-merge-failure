import { Rating, Typography } from "@mui/material";

function RatingItemSmall({ product }) {
  console.log('hej')
  return (
      <>
        {console.log(product)}
        <Typography component="legend">{product.createdAt}Lite extra text</Typography>
        <Rating name="customized-10" value={product.rating} max={10} />
        </>
  );
}

export default RatingItemSmall;

/* format(` */
/* import { format } from "date-fns"; */
