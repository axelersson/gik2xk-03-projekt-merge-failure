import ProductItemSmall from "./ProductItemSmall";

function ProductList() {
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
  return (
    <ul>
      {products &&
        products.map((product) => {
          return (
            <li key={`productId_${product.id}`}>
              <ProductItemSmall product={product} />
            </li>
          );
        })}
    </ul>
  );
}

export default ProductList;
