import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./User/Pages/Home/Home";
import Shop from "./User/Pages/Shop/Shop";
import Cart from "./User/Pages/Cart/Cart";
import Topbar from "./Components/topBar/Topbar";
import Error from "./Components/Error/Error";
import ProductListing from "./Admin/shop/Product_Listing";
import ProductPage from "./Components/productPage/ProductPage";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Topbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<Error />} />
          <Route path="/product-listing" element={<ProductListing />} />
          <Route path="/shop/:productId" element={<ProductPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
