import { Button, TextField } from "@mui/material";
import { useParams } from "react-router-dom";

function ProductEdit() {
  const params = useParams();
  console.log(params);
  return (
    <form>
      <TextField name="title" label="Produktnamn" fullWidth />
      <TextField
        name="description"
        label="description"
        fullWidth
        multiline
        minRows={7}
      />
      <TextField name="price" label="Pris" fullWidth />
      <TextField name="imageUrl" label="imageUrl" fullWidth />
      <Button variant="outlined">Upddatera produkt</Button>
      <Button variant="outlined">Ta bort produkt</Button>
    </form>
  );
}

export default ProductEdit;
