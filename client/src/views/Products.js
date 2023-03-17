import { Grid } from "@mui/material";
import "./Products.css";

function Products() {
  return (
    <Grid container columnSpacing={2} className="Products">
      <Grid className="Product__grid-item" item cs={12} md={8}></Grid>
      <Grid className="Product__grid-item" item cs={12} md={8}></Grid>
    </Grid>
  );
}

export default Products;

//<h2>smidig hitman 24/7</h2>;
//<h2>helt vanligt jävla knark</h2>;
//<h2>en helt vanlig tabbe</h2>;
//
//
