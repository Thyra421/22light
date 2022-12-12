import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./User/Pages/Home/Home";
import Shipping from "./User/Pages/Shipping/Shipping";
import Shop from "./User/Pages/Shop/Shop";
import Cart from "./User/Pages/Cart/Cart";
import Order from "./User/Pages/Order/Order";
import Topbar from "./Components/topBar/Topbar";
import Error from "./Components/Error/Error";
import ProductListing from "./Admin/shop/Product_Listing";
import ProductPage from "./Components/productPage/ProductPage";
import { Login, Register } from "./auth/Auth";
import { Logged } from "./auth/Logged";

const App = () => {
    const role = window.localStorage.getItem('role');
  return (
    <div>
      <BrowserRouter>
        <Topbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<Order />} />
          <Route path="*" element={<Error />} />
          <Route path="/shop/:productId" element={<ProductPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/logged" element={<Logged />} />
          <Route path="/shipping" element={<Shipping />} />
          {role === "admin" &&
          <>
            <Route path="/product-listing" element={<ProductListing />} />
          </>
          }
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
