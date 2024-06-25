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
import Cart from "./components/pages/Cart";
import ContactUs from "./components/pages/ContactUs";
import Ajrakh from "./components/pages/Ajrakh";
import Chikankari from "./components/pages/Chikankari";
import Madhubani from "./components/pages/Madhubani";
import IncenseSticks from "./components/pages/IncenseSticks";



function App() {
  return (
    <BrowserRouter>
      <Routes> 
        <Route path="/" element={<Layouts />}>
          <Route index element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="/wishlist" element={<Wishlist />} />
          <Route exact path="/products" element={<Products />} />
          <Route exact path="/productdetail" element={<ProductDetail />} />
          <Route path="/product/:productId" component={ProductDetail} />
          <Route exact path="/Cart" element={<Cart />} />
          <Route exact path="/ContactUs" element={<ContactUs />} />
          <Route exact path="/Madhubani" element={<Madhubani />} />
          <Route exact path="/Ajrakh" element={<Ajrakh />} />
          <Route exact path="/Chikankari" element={<Chikankari />} />
          <Route exact path="/IncenseSticks" element={<IncenseSticks />} />



        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
