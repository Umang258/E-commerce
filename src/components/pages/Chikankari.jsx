// src/components/Products.jsx
import React from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
import { MDBIcon } from "mdbreact";

const Chikankari = ({ handleAddToWishlist }) => {
  const items = [
    {
      id: 4,
      product_name: "Product 4",
      price: 955,
      image: "/image/chikankari/ck1.png",
    },
    {
      id: 4,
      product_name: "Product 4",
      price: 955,
      image: "/image/chikankari/ck2.png",
    },
    {
      id: 4,
      product_name: "Product 4",
      price: 955,
      image: "/image/chikankari/ck3.png",
    },
    {
      id: 4,
      product_name: "Product 4",
      price: 955,
      image: "/image/chikankari/ck4.png",
    },
    {
      id: 4,
      product_name: "Product 4",
      price: 955,
      image: "/image/chikankari/ck5.png",
    },
    {
      id: 4,
      product_name: "Product 4",
      price: 955,
      image: "/image/chikankari/ck6.png",
    },
    {
      id: 4,
      product_name: "Product 4",
      price: 955,
      image: "/image/chikankari/ck7.png",
    },
    {
      id: 4,
      product_name: "Product 4",
      price: 955,
      image: "/image/chikankari/ck8.png",
    },
    {
      id: 4,
      product_name: "Product 4",
      price: 955,
      image: "/image/chikankari/ck9.png",
    },
    {
      id: 4,
      product_name: "Product 4",
      price: 955,
      image: "/image/chikankari/ck10.png",
    },
    {
      id: 4,
      product_name: "Product 4",
      price: 955,
      image: "/image/chikankari/ck11.png",
    },
    {
      id: 4,
      product_name: "Product 4",
      price: 955,
      image: "/image/chikankari/ck12.png",
    },
    {
      id: 4,
      product_name: "Product 4",
      price: 955,
      image: "/image/chikankari/ck13.png",
    },
    {
      id: 4,
      product_name: "Product 4",
      price: 955,
      image: "/image/chikankari/ck14.png",
    },
  ];

  return (
    <div
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL + '/image/shop-bg.jpg'})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: '20px 0', // Optional: Adjust padding for better spacing
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
            CHIKANKARI
          </h5>
        </div>
      </div>
      <Container>
        <Row>
          {items.map((elem) => (
            <Col key={elem.id} sm={12} md={6} lg={4} xl={3} className="mb-4">
              <Card>
                <Card.Img variant="top" src={process.env.PUBLIC_URL + elem.image} />
                <Card.Body>
                  <Card.Title>{elem.product_name}</Card.Title>
                  <Card.Text>${elem.price}</Card.Text>
                  <Link to="/ProductDetail" className="btn btn-primary mx-4">View details</Link>
                  <Link to="/wishlist" className="btn mx-4"><MDBIcon className="me mdn-icon" icon="heart" size="lg" /></Link>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Chikankari;
