import { Button } from "@mui/material";
import { useParams } from "react-router-dom";
import ProductItemLarge from "../components/ProductItemLarge";
import RatingList from "../components/RatingList";

function ProductDetail() {
  const params = useParams();
  console.log({ params });
  return (
    <>
      <ProductItemLarge params={params} />

      <RatingList params={params}></RatingList>

      <Button variant="outlined">
        {/* <Routes>
            <Route path={`/products/${product.id}`}></Route>
          </Routes> */}
        {/* <Link to={`/products/${product.id}`}{product.name}></Link> */}
        Upddatera produkt
      </Button>
      <Button variant="outlined">
        {/* <Link to={`/products/${product.id}/addToCart`}>
            <AddToCart productId={product.id} />
          </Link> */}
        Ta bort produkt
      </Button>
    </>
  );
}

export default ProductDetail;
