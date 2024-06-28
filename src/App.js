import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Layouts from "./components/Layout/Layouts";
import Login from "./components/pages/Login";
import Signup from "./components/pages/Signup";
import Wishlist from "./components/Module/Wishlist";
import Products from "./components/Module/Products";
import ProductDetail from "./components/pages/ProductDetail";
import ContactUs from "./components/pages/ContactUs";
import Ajrakh from "./components/pages/Ajrakh";
import Chikankari from "./components/pages/Chikankari";
import Madhubani from "./components/pages/Madhubani";
import IncenseSticks from "./components/pages/IncenseSticks";
import Payment  from "./components/pages/Payment";
import ShoppingCart from "./components/pages/ShoppingCart";
import OrderPlace from "./components/pages/OrderPlace";
import RouteConstants from "./constants/RouteConstants";

function App() {
  return (
    <BrowserRouter>
      <Routes> 
        <Route path="/" element={<Layouts />}>
          <Route index element={<Home />} />
          <Route exact path={RouteConstants.About} element={<About />} />
          <Route exact path={RouteConstants.Login} element={<Login />} />
          <Route exact path={RouteConstants.Signup} element={<Signup />} />
          <Route exact path={RouteConstants.Wishlist} element={<Wishlist />} />
          <Route exact path={RouteConstants.Products} element={<Products />} />
          <Route exact path={RouteConstants.ProductDetail} element={<ProductDetail />} />
          <Route path="/product/:productId" component={ProductDetail} />
          <Route exact path={RouteConstants.ContactUs} element={<ContactUs />} />
          <Route exact path={RouteConstants.Madhubani} element={<Madhubani />} />
          <Route exact path={RouteConstants.Ajrakh} element={<Ajrakh />} />
          <Route exact path={RouteConstants.Chikankari} element={<Chikankari />} />
          <Route exact path={RouteConstants.IncenseSticks} element={<IncenseSticks />} />
          <Route exact path={RouteConstants.ShoppingCart} element={<ShoppingCart />} />
          <Route exact path={RouteConstants.Payment} element={<Payment />} />
          <Route exact path={RouteConstants.OrderPlace} element={<OrderPlace/>} />
          



        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
