// src/components/Products.jsx
import React, { useEffect, useState } from "react";
import { Card, Container, Row, Col, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, useParams } from "react-router-dom";
import { MDBIcon } from "mdbreact";
import { useAuth } from "../../context/AuthContext";

const Product = ({  }) => {
    const [product, setProduct] = useState([]);
    const { user } = useAuth();

   let {id} = useParams()
   console.log(id)
   useEffect(() => {
    fetch(`http://localhost:4001/product/${id}`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("first", data);
        setProduct(data);
      })

      .catch((error) => console.log(error));
  }, [id]);

  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    console.log(user, 'user');
     fetch("http://localhost:4001/product", {
       method: "GET",
     })
       .then((res) => res.json())
       .then((data) => setProduct(data))
       .catch((error) => console.log(error));
    if (user && user?._id) {
     

      fetch(`http://localhost:4001/getCartItems/${user._id}`, {
        method: "GET",
      })
        .then((res) => res.json())
        .then((data) => setCart(data))
        .catch((error) => console.log(error));

      fetch(`http://localhost:4001/getWishlist/${user._id}`, {
        method: "GET",
      })
        .then((res) => res.json())
        .then((data) => setWishlist(data))
        .catch((error) => console.log(error));
    }
  }, [user]);

  const handleAddToCart = (productId) => {
    fetch("http://localhost:4001/addToCart", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userId: user._id,
        productId,
        quantity: 1,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        setCart([...cart, data]);
      })
      .catch((error) => console.log(error));
  };

  const handleAddToWishlist = (productId) => {
    fetch("http://localhost:4001/addToWishlist", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userId: user._id,
        productId,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        setWishlist([...wishlist, data]);
      })
      .catch((error) => console.log(error));
  };

  const handleRemoveFromWishlist = (productId) => {
    fetch("http://localhost:4001/removeFromWishlist", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userId: user._id,
        productId,
      }),
    })
      .then((res) => res.json())
      .then(() => {
        setWishlist(
          wishlist.filter((item) => item.productId._id !== productId)
        );
      })
      .catch((error) => console.log(error));
  };

  const isProductInCart = (productId) => {
    return cart.some((item) => item.productId._id === productId);
  };

  const isProductInWishlist = (productId) => {
    return wishlist.some((item) => item.productId._id === productId);
  };

  return (
    <>
      <div className="p-0 position-relative  mx-5 my-3 z-index-2" style={{width:"50%", left:"23%"}}>
        <div
          className="event py-3 pe-1"
          style={{
            backgroundImage: "linear-gradient(195deg, #ec407a, #D4B04C",
            boxShadow:
              "0 4px 20px 0 rgba(0, 0, 0, .14), 0 7px 10px -5px rgba(233, 30, 99, .4)",
            borderRadius: ".5rem",
          }}
        >
          <h5 className="text-center text-white" style={{ fontWeight: "bold", fontFamily: "DM Serif Display", fontSize: "30px", fontStyle: "italic" }}>
            Product
          </h5>
        </div>
      </div>
      
      <div>
      <Container>
        <Row>
          {product.map((item) => (
            <Col key={item._id} sm={12} md={6} lg={4} xl={3} className="mb-4">
             <Link to = {`/ProductDetail/${item.id}`}>
             <Card>
                <Card.Img
                  variant="top"
                  src={`http://localhost:4001${item.thumbnail}`}
                  style={{ height: "280px" }}
                />
                <Card.Body style={{ height: "250px" }}>
                  <div style={{height:"60px", marginBottom:"30px"}}>
                  <Card.Title>{item.productname}</Card.Title>
                  </div>

                  <div style={{height:"10px"}}>
                  <Card.Text>₹{item.price}</Card.Text>
                  </div>
                  
                  {/* <Card.Text>Category: {item.category?.category}</Card.Text> */}
                  {isProductInCart(item._id) ? (
                    <div style={{position: "relative",
                      top: "52px"}}>
                      <Button    
                       className="btn btn-success mx-2">
                      <MDBIcon fas icon="check" /> In Cart
                    </Button>
                    </div>
                  ) : (
                    <div style={{position: "relative",
                      top: "52px",
                      }}>
                      <Link to="/ShoppingCart">
                      <Button 
                        
                        onClick={() => handleAddToCart(item._id)}
                        className="btn btn-warning mx-2"
                      >
                        <MDBIcon fas icon="cart-plus" /> Add to Cart
                      </Button>
                    </Link>
                      </div>
                  )}
                  {isProductInWishlist(item._id) ? (
                    <div style={{    position: "relative",
                      bottom: "-16px",
                      left:"180px"
                      }}>
                      <Button
                    
                      onClick={() => handleRemoveFromWishlist(item._id)}
                      className="btn mx-1 text-danger"
                    >
                      <MDBIcon
                        className="me mdn-icon"
                        fas
                        icon="heart"
                        size="lg"
                      />
                    </Button>
                    </div>
                  ) : (
                    <div style={{    position: "relative",
                      bottom: "-17px",
                      left:"180px"
                      }} >
                      <Link to="/Wishlist">
                    <Button
                    
                      onClick={() => handleAddToWishlist(item._id)}
                      className="btn mx-1 text-secondary"
                    >
                      <MDBIcon
                        className="me mdn-icon"
                        far
                        icon="heart"
                        size="lg"
                      />
                    </Button>
                    </Link>
                    </div>
                  )}
                </Card.Body>
              </Card>
             </Link>
            </Col>
          ))}
        </Row>
      </Container>
    </div>

    </>
  );
};

export default Product;
