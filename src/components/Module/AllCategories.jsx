// src/components/Products.jsx
import React, { useEffect, useState } from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
// import { MDBIcon } from "mdbreact";

const AllCategories = ({ handleAddToWishlist }) => {
  const [category, setCategory] = useState([]);

   
  useEffect(() => {
    fetch("http://localhost:4001/category", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("first", data);
        setCategory(data);
      })

      .catch((error) => console.log(error));
  }, []);

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
            Category
          </h5>
        </div>
      </div>
      <Container style={{maxWidth: "1050px"}}>
        <Row className="d-flex justify-content-center">
          {category.map((elem) => (
            <Col key={elem.id} sm={12} md={6} lg={4} xl={3} className="mb-4">
              <Link to={`/categorydetail/${elem._id}`}>
              <Card>
                <Card.Img
                  variant="top"
                  src={process.env.PUBLIC_URL + elem.image}
                />
                <Card.Body>
                  <Card.Title>{elem.category}</Card.Title>
                  <Card.Title>{elem.id}</Card.Title>
               
                </Card.Body>
              </Card>
              </Link>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default AllCategories;
