import { Button, Link, Typography } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import AddToCart from "../components/AddToCart.js";

function ProductItemSmall({ product }) {
  console.log(product);
  return (
    <>
      <img
        height="50"
        width="50"
        src={product.imageUrl}
        alt="Det saknas en bild på produkten"
      />
      <div>
        <Typography variant="h5" component="h3">
          <div>{product.title}</div>
        </Typography>
        <Button variant="outlined">
          <Routes>
            <Route path={`/products/${product.id}`}></Route>
          </Routes>
          {/* <Link to={`/products/${product.id}`}{product.name}></Link> */}
          {product.name}
        </Button>
        <Button variant="outlined">
          <Link to={`/products/${product.id}/addToCart`}>
            <AddToCart productId={product.id} />
          </Link>
        </Button>
      </div>
    </>
  );
}

export default ProductItemSmall;
