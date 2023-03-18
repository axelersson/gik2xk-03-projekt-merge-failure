import { Button } from "@mui/material";
import { useParams } from "react-router-dom";
import ProductItemLarge from "../components/ProductItemLarge";

function ProductDetail() {
  const products = [
    {
      id: 2,
      title: "bbb",
      description: "zzz",
      price: 10,
      imageUrl: "https://www.hejasdasds.com",
      createdAt: "2023-03-16T10:09:56.000Z",
      updatedAt: "2023-03-16T10:09:56.000Z",
      ratings: [
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
      ],
    },
  ];
  const params = useParams();
  console.log(params);
  return (
    <>
      <ProductItemLarge product={products[0]} />
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
