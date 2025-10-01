import React, { useState } from "react";
import { Nav, NavDropdown } from "react-bootstrap";

import { Link } from "react-router-dom";
import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdb-react-ui-kit";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "../../App.css"; // Ensure you import your custom CSS file


export default function Footer() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log("Search Term:", searchTerm);
  };

  return (
    <>
      <NavDropdown.Divider />
      <MDBFooter
        bgColor="white"
        className="text-center text-lg-start text-muted"
        style={{ fontFamily: "DM Serif Display", fontSize: "20px" }}
      >
       
      
        <section className="section">
          <MDBContainer className="text-center text-md-start mt-5">
            <div>
              <p style={{ textAlign: "center" }}>
                <b>BE THE FIRST TO KNOW ABOUT NEW PRODUCTS AND SALES</b>
              </p>
            </div>
            <form onSubmit={handleSearchSubmit} className="search-bar">
              <input
                type="text"
                placeholder="Ex. Artisan@gmail.com"
                value={searchTerm}
                onChange={handleSearchChange}
              />
              <button type="submit">Subscribe</button>
            </form>
          </MDBContainer>
        </section>

        <div style={{ backgroundColor: "#eae9e9",  }}>
          <MDBContainer style={{ maxWidth: "100%" }}>
            <MDBRow style={{ height: "70px" }}>
              <MDBCol size="sm">
                <div>Free Shipping</div>

                <img
                  className="d-block w-70"
                  src={process.env.PUBLIC_URL + "/image/footer/i1.png"}
                  alt="Fourth slide"
                  style={{
                    maxWidth: "8rem",
                    objectFit: "cover",
                    marginTop: "-1rem"
                    
                  }}
                />
              </MDBCol>
              <MDBCol size="sm">
                100% Protection
                <img
                  className="d-block w-70"
                  src={process.env.PUBLIC_URL + "/image/footer/i2.png"}
                  alt="Fourth slide"
                  style={{
                    maxWidth: "6rem",
                    objectFit: "cover",
                    margin: "auto",
                  }}
                />
              </MDBCol>
              <MDBCol size="sm">
                Secure Payment
                <img
                  className="d-block w-70"
                  src={process.env.PUBLIC_URL + "/image/footer/i3.png"}
                  alt="Fourth slide"
                  style={{
                    maxWidth: "6rem",
                    objectFit: "cover",
                    margin: "auto",
                  }}
                />
              </MDBCol>
              <MDBCol size="sm">
                Assured Quality
                <img
                  className="d-block w-70"
                  src={process.env.PUBLIC_URL + "/image/footer/i4.png"}
                  alt="Fourth slide"
                  style={{
                    maxWidth: "6rem",
                    objectFit: "cover",
                    margin: "auto",
                  }}
                />
              </MDBCol>
              <MDBCol size="sm">
                Authentic Products
                <img
                  className="d-block w-70"
                  src={process.env.PUBLIC_URL + "/image/footer/i5.png"}
                  alt="Fourth slide"
                  style={{
                    maxWidth: "6rem",
                    objectFit: "cover",
                    margin: "auto",
                  }}
                />
              </MDBCol>
              <MDBCol size="sm">
                Best Price Promise
                <img
                  className="d-block w-70"
                  src={process.env.PUBLIC_URL + "/image/footer/i4.png"}
                  alt="Best Price Promise"
                  style={{
                    maxWidth: "6rem",
                    objectFit: "cover",
                    margin: "auto",
                  }}
                />
              </MDBCol>
            </MDBRow>
          </MDBContainer>
          <br />
          <div
            style={{
              color: "black",
              marginLeft: "50px",
              marginRight: "50px",
            }}
          >
            <hr className="horizontal black mb-1 mt-lg-5 my-4" />
          </div>
        </div>

        <div className="text-center p-4" style={{ backgroundColor: "#E9A401" }}>
          <Nav
            className="Navs"
            style={{ display: "flex", margin: "auto", fontSize: "large" }}
          >
            <Nav.Link className="nav-link">
              <Link to="/" className="nav-items">
                Home
              </Link>
            </Nav.Link>
            <Nav.Link className="nav-link">
              <Link to="/about" className="nav-items">
                About Us
              </Link>
            </Nav.Link>
            <Nav.Link className="nav-link">
              <Link to="/ContactUs" className="nav-items">
                Contact Us
              </Link>
            </Nav.Link>
            <Nav.Link className="nav-link">
              <Link to="/Signup" className="nav-items">
                Signup
              </Link>
            </Nav.Link>

            <img
              className="made-in-india"
              src={process.env.PUBLIC_URL + "/image/footer/f2.png"}
              alt="Fourth slide"
              style={{
                maxWidth: "10rem",
                objectFit: "cover",
                position: "relative",
                left: "300px",
              }}
            />
          </Nav>

          <div
            style={{ color: "black", marginLeft: "50px", marginRight: "50px" }}
          >
            <hr className="horizontal black mb-4 mt-lg-4 my-4" />
          </div>

          </div>
          <footer className="footer">
            <div className="footer-section social-media">
              <Link to="/Login" className="iconitem">
                <MDBIcon style={{ color: "black" }} fab icon="facebook-f" />
              </Link>
              <Link to="/twitter" className="iconitem">
                <MDBIcon style={{ color: "black" }} fab icon="twitter" />
              </Link>
              <Link to="/Wishlist" className="iconitem">
                <MDBIcon style={{ color: "black" }} fab icon="instagram" />
              </Link>
              <Link to="/Wishlist" className="iconitem">
                <MDBIcon style={{ color: "black" }} fab icon="google" />
              </Link>
            </div>
            <div className="footer-section company-name">
              <p>© 2024, ARTISAN.</p>
            </div>
            <div className="footer-section payment-icons">
              <img
                className="payment-option"
                src={process.env.PUBLIC_URL + "/image/footer/p5.png"}
                alt="Fourth slide"
                style={{ height: "2rem" }}
              />
  
              <img
                className="payment-option"
                src={process.env.PUBLIC_URL + "/image/footer/p6.png"}
                alt="Fourth slide"
                style={{ marginLeft: "12px" }}
              />
  
              <img
                className="payment-option"
                src={process.env.PUBLIC_URL + "/image/footer/p7.png"}
                alt="Fourth slide"
                style={{ marginLeft: "12px" }}
              />
  
              <img
                className="payment-option"
                src={process.env.PUBLIC_URL + "/image/footer/p8.png"}
                alt="Fourth slide"
                style={{ marginLeft: "12px", height: "2rem" }}
              />
            </div>
          </footer>
        
      </MDBFooter>
    </>
  );
}
