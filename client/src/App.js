import "./App.css";
import { Typography, Toolbar, AppBar, Box } from "@mui/material";
import { Routes, Route, Link } from "react-router-dom";
import Products from "./views/Products";
import Cart from "./views/Cart";
import ProductEdit from "./views/ProductEdit";
//import Logo from "./silkroadshop.png";

function App() {
  return (
    <div className="App">
      <h1>hedvábná stezka</h1>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <Link to="/">produkty</Link>
            </Typography>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <Link to="/cart">nákupní košík</Link>
            </Typography>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <Link to="/administration">správa ádministratoní</Link>
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
      <div>
        <Routes>
          <Route path="/" element={<Products></Products>}></Route>
          <Route path="/cart" element={<Cart></Cart>}></Route>
          <Route
            path="/administration"
            element={<ProductEdit></ProductEdit>}
          ></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
