import RatingItemSmall from "./RatingItemSmall";
import { useEffect, useState } from "react";
import { getAll } from "../models/ProductModel";

function RatingList({ params }) {
  console.log(params.id);
  const [products, setProducts] = useState([]);
  useEffect(() => {
    getAll().then((products) => setProducts(products));
  }, []);
  console.log(products);
  return (
    <ul>
      {products[params.id] &&
        products[params.id].map((product) => {
          return (
            <li key={`productId_${product.id}`}>
              {console.log("hej")}
              <RatingItemSmall product={product} />
            </li>
          );
        })}
    </ul>
  );
}

export default RatingList;

/* {ratings &&
  ratings.map((rating) => {
    return (
      <li key={`ratingId_${rating.id}`}>
        <RatingItemSmall rating={rating} />
      </li>
    );
  })} */
