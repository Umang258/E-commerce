// src/components/Products.jsx
import React, { useEffect, useState } from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
import { MDBIcon } from "mdbreact";

const AllProducts = ({ handleAddToWishlist }) => {
 

  const [product, setProducts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:4001/product", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("first", data);
        setProducts(data);
      })

      .catch((error) => console.log(error));
  }, []);

  return (
    <div
      style={{
        backgroundImage: `url(${
          process.env.PUBLIC_URL + "/image/shop-bg.jpg"
        })`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        padding: "20px 0", // Optional: Adjust padding for better spacing
      }}
    >
      <div className="p-3 position-relative mt-n4 mx-5 z-index-2">
        <div
          className="contact py-4 pe-1"
          style={{
            backgroundImage: "linear-gradient(195deg, #ec407a, #D4B04C",
            boxShadow:
              "0 4px 20px 0 rgba(0, 0, 0, .14), 0 7px 10px -5px rgba(233, 30, 99, .4)",
            borderRadius: ".5rem",
          }}
        >
          <h5
            className="text-center text-white"
            style={{ fontWeight: "bold", fontFamily: "DM Serif Display" }}
          >
            ALL PRODUCTS
          </h5>
        </div>
      </div>

      <Container>
        <Row>
          {product.map((item) => (
            <Col key={item._id} sm={12} md={6} lg={4} xl={3} className="mb-4">
              <Link to="/ProductDetail">
                <Card>
                  <Card.Img variant="top" src={item.image} />
                  <Card.Body>
                    <Card.Title>{item.productname}</Card.Title>
                    <Card.Text>${item.price}</Card.Text>

                    <Link to="/ShoppingCart" className="btn btn-warning mx-2">
                      <MDBIcon fas icon="cart-plus" />
                    </Link>
                    <Link to="/wishlist" className="btn mx-1">
                      <MDBIcon className="me mdn-icon" icon="heart" size="lg" />
                    </Link>
                  </Card.Body>
                </Card>
              </Link>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default AllProducts;