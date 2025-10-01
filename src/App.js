import { BrowserRouter, Navigate, Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Layouts from "./components/Layout/Layouts";
import Login from "./components/pages/Login";
import Signup from "./components/pages/Signup";
import Wishlist from "./components/Module/Wishlist";
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
import CategoryDetail from "./components/pages/CategoryDetail";
import AllProducts from "./components/Module/AllProducts";
import Product from "./components/pages/Product";
import { AuthProvider, useAuth } from "./context/AuthContext";



// import AllProducts from "./components/Module/AllProducts";

const ProtectedRoute = (props) => {
  const token = localStorage.getItem("accessToken");
  const storedUser = localStorage.getItem("user");
  let flag = false;
  if (token && storedUser) {
    try {
      flag = true
    } catch (error) {
      console.error("Failed to parse user from local storage", error);
    }
  }

 return flag ? props.children : <Navigate to="/login" />;
};

const AuthRoute = (props) => {
 const  location = useLocation();
 const { isAuthenticate } = useAuth();
 console.log("check it is true from app js login", isAuthenticate, location.pathname);
 return isAuthenticate ? <Navigate to="/" /> : props.children;
};


function App() {

  return (
    <BrowserRouter>
    <AuthProvider>
      <Routes> 
        <Route path="/" element={<Layouts />}>
          <Route index element={<Home />} />
          <Route exact path={RouteConstants.About} element={<About />} />
          
          <Route exact path={RouteConstants.Login}
              element={
                <AuthRoute>
                  <Login />
                </AuthRoute>
              }
            />

             <Route exact path={RouteConstants.Signup} element={<Signup />} />
            {/* <Route element={<ProtectedRoute />}> */}
              <Route exact path={RouteConstants.Wishlist} element={<Wishlist />} />
            {/* </Route> */}

          {/* <Route exact path={RouteConstants.Signup} element={<Signup />} />
          <Route exact path={RouteConstants.Wishlist} element={<Wishlist />} /> */}

          <Route exact path={RouteConstants.AllProducts} element={<AllProducts />} /> 
          <Route exact path={RouteConstants.Product} element={<Product/>} />
          <Route exact path={RouteConstants.ProductDetail} element={<ProductDetail />} />
          <Route path="/product/:productId" component={ProductDetail} />
          <Route exact path={RouteConstants.CategoryDetail} element={<CategoryDetail/>} />
          <Route exact path={RouteConstants.ContactUs} element={<ContactUs />} />
          <Route exact path={RouteConstants.Madhubani} element={<Madhubani />} />
          <Route exact path={RouteConstants.Ajrakh} element={<Ajrakh />} />
          <Route exact path={RouteConstants.Chikankari} element={<Chikankari />} />
          <Route exact path={RouteConstants.IncenseSticks} element={<IncenseSticks />} />
          <Route exact path={RouteConstants.ShoppingCart}
              element={
                <ProtectedRoute>
                  <ShoppingCart />
                </ProtectedRoute>
              }
            />

          <Route exact path={RouteConstants.Payment} element={<Payment />} />
          <Route exact path={RouteConstants.OrderPlace} element={<OrderPlace/>} />
          



        </Route>
      </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
