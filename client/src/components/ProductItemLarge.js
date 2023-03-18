import { Typography } from "@mui/material";
import RatingList from "./RatingList";

function ProductItemLarge({ product }) {
  console.log(product);
  return (
    <>
      <img
        height="50"
        width="50"
        src={product.imageUrl}
        alt="Det saknas en bild på produkten"
      />
      <Typography variant="h5" component="h3">
        <div>{product.title}</div>
      </Typography>
      <p>{product.description}</p>
      <div>
        <RatingList rating={product.ratings}></RatingList>
      </div>
    </>
  );
}

export default ProductItemLarge;
