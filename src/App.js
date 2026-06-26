import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./screens/Login/Login";
import Signup from "./screens/Signup/Signup";
import Products from "./screens/Products/Products";
import ProductDetails from "./screens/ProductDetails/ProductDetails";
import CreateOrder from "./screens/CreateOrder/CreateOrder";
import AddProduct from "./screens/AddProduct/AddProduct";
import ModifyProduct from "./screens/ModifyProduct/ModifyProduct";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route
          path="/create-order"
          element={<CreateOrder />}
        />
        <Route
          path="/add-product"
          element={<AddProduct />}
        />
        <Route
          path="/products/:id/modify"
          element={<ModifyProduct />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;