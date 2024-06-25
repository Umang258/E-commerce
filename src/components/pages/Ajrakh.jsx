// src/components/Products.jsx
import React from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
import { MDBIcon } from "mdbreact";

const Ajrakh = ({ handleAddToWishlist }) => {
  const items = [
    {
      id: 1,
      product_name: "Product 1",
      price: 955,
      image: "/image/Ajrakh/k1.png",
    },
    {
      id: 2,
      product_name: "Product 2",
      price: 955,
      image: "/image/Ajrakh/k2.png",
    },
    {
      id: 3,
      product_name: "Product 3",
      price: 955,
      image: "/image/Ajrakh/k3.png",
    },
    {
      id: 4,
      product_name: "Product 4",
      price: 955,
      image: "/image/Ajrakh/k4.png",
    },
    {
      id: 4,
      product_name: "Product 4",
      price: 955,
      image: "/image/Ajrakh/k5.png",
    },
    {
      id: 4,
      product_name: "Product 4",
      price: 955,
      image: "/image/Ajrakh/k6.png",
    },
    {
      id: 4,
      product_name: "Product 4",
      price: 955,
      image: "/image/Ajrakh/k7.png",
    },
    {
      id: 4,
      product_name: "Product 4",
      price: 955,
      image: "/image/Ajrakh/k8.png",
    },
    {
      id: 4,
      product_name: "Product 4",
      price: 955,
      image: "/image/Ajrakh/k9.png",
    },
    {
      id: 4,
      product_name: "Product 4",
      price: 955,
      image: "/image/Ajrakh/k10.png",
    },
    {
      id: 4,
      product_name: "Product 4",
      price: 955,
      image: "/image/Ajrakh/k11.png",
    },
    {
      id: 4,
      product_name: "Product 4",
      price: 955,
      image: "/image/Ajrakh/k12.png",
    },
    {
      id: 4,
      product_name: "Product 4",
      price: 955,
      image: "/image/Ajrakh/k13.png",
    },
    {
      id: 4,
      product_name: "Product 4",
      price: 955,
      image: "/image/Ajrakh/k14.png",
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
      <div className="title" style={{color:"#E9A401"}}><h3 style={{justifyContent: "center", textAlign: "center", fontSize: "30px"}}><b>ALL PRODUCTS</b></h3></div>
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

export default Ajrakh;
