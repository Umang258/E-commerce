// src/components/Products.jsx
import React from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
import { MDBIcon } from "mdbreact";

const IncenseSticks = ({ handleAddToWishlist }) => {
  const items = [
    {
      id: 1,
      product_name: "Product 1",
      price: 955,
      image: "/image/sticks/s1.png",
    },
    {
      id: 2,
      product_name: "Product 2",
      price: 955,
      image: "/image/sticks/s2.png",
    },
    {
      id: 3,
      product_name: "Product 3",
      price: 955,
      image: "/image/sticks/s3.png",
    },
    {
      id: 4,
      product_name: "Product 4",
      price: 955,
      image: "/image/sticks/s4.png",
    },
    {
      id: 4,
      product_name: "Product 4",
      price: 955,
      image: "/image/sticks/s5.png",
    },
    {
      id: 4,
      product_name: "Product 4",
      price: 955,
      image: "/image/sticks/s6.png",
    },
    {
      id: 4,
      product_name: "Product 4",
      price: 955,
      image: "/image/sticks/s7.png",
    },
    {
      id: 4,
      product_name: "Product 4",
      price: 955,
      image: "/image/sticks/s8.png",
    },
    {
      id: 4,
      product_name: "Product 4",
      price: 955,
      image: "/image/sticks/s9.png",
    },
    {
      id: 4,
      product_name: "Product 4",
      price: 955,
      image: "/image/sticks/s10.png",
    },
    {
      id: 4,
      product_name: "Product 4",
      price: 955,
      image: "/image/sticks/s11.png",
    },
    {
      id: 4,
      product_name: "Product 4",
      price: 955,
      image: "/image/sticks/s12.png",
    },
    {
      id: 4,
      product_name: "Product 4",
      price: 955,
      image: "/image/sticks/s13.png",
    },
    {
      id: 4,
      product_name: "Product 4",
      price: 955,
      image: "/image/sticks/s14.png",
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

export default IncenseSticks;
