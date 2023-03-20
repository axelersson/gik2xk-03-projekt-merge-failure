import RatingItemSmall from "./RatingItemSmall";
import { useEffect, useState } from "react";
import { getAll } from "../models/ProductModel";
import findRating from "../HelperFunctions/findProduct";

function RatingList({ params }) {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    getAll().then((products) => setProducts(findRating(products, params.id)));
  }, [params]);
  console.log(products.ratings)
  if (products.ratings){
  products.ratings.map((product) => {  
    console.log(product)
  return (   
    <li key={`ratingId_${product.id}`}>
      <RatingItemSmall product={product} />
      </li>
  )
    }
  )} 
}

export default RatingList;


/* console.log(params.id);
  const [products, setProducts] = useState([]);
  useEffect(() => {
    getAll().then((products) => setProducts(FindProduct(products, params.id)));
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
  } */
