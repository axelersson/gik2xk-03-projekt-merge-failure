import { Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { getOne } from "../models/ProductModel";

function ProductItemLarge({ params }) {
  console.log(params.id);
  const [product, setProducts] = useState([]);
  useEffect(() => {
    getOne(params.id).then((product) => setProducts(product));
  }, [product, params]);
  console.log(product.data);
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
    </>
  );
}

export default ProductItemLarge;
