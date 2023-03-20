import { Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { getAll } from "../models/ProductModel";
import findProduct from "../HelperFunctions/findProduct";

function ProductItemLarge({ params }) {
  console.log(params.id);
  const [products, setProducts] = useState([]);
  useEffect(() => {
    getAll().then((products) => setProducts(findProduct(products, params.id)));
  }, [params]);
  console.log(products)
  if (products) {
  return (
    <>
      <img
        height="50"
        width="50"
        src={products.imageUrl}
        alt="Det saknas en bild på produkten"
      />
      <Typography variant="h5" component="h3">
        <div>{products.title}</div>
      </Typography>
      <p>{products.description}</p>
    </>
  );
  }
}


export default ProductItemLarge;
