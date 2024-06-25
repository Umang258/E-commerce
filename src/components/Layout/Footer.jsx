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

export default function App() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log("Search Term:", searchTerm);
  };

  return (<>
    <NavDropdown.Divider/>
    <MDBFooter bgColor="light" className="text-center text-lg-start text-muted"style={{fontFamily: "DM Serif Display", fontSize: "20px"}}>
      <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
        <MDBContainer className="text-center text-md-start mt-5">
          <MDBRow className="mt-3">
            <MDBCol md="4" lg="3" xl="3" className="mx-auto mb-4">
              <img
                className="d-block w-100"
                src={process.env.PUBLIC_URL + "/image/footer/f3.jpeg"}
                alt="Fourth slide"
                style={{ height: "100%", objectFit: "cover" }}
              />
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className="mx-auto mb-4">
              <img
                className="d-block w-100"
                src={process.env.PUBLIC_URL + "/image/footer/f4.png"}
                alt="Fourth slide"
                style={{ height: "100%", objectFit: "cover" }}
              />
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className="mx-auto mb-4">
              <img
                className="d-block w-100"
                src={process.env.PUBLIC_URL + "/image/footer/f5.png"}
                alt="Fourth slide"
                style={{ height: "100%", objectFit: "cover" }}
              />
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className="mx-auto  mb-4">
              <img
                className="d-block w-100"
                src={process.env.PUBLIC_URL + "/image/footer/f6.jpeg"}
                alt="Fourth slide"
                style={{ height: "100%", objectFit: "cover" }}
              />
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <section className="section" >
        <MDBContainer className="text-center text-md-start mt-5">
          <div>
            <p style={{ textAlign: "center" }}>
              <b>BE THE FIRST TO KNOW ABOUT NEW PRODUCTS AND SALES</b>
            </p>
          </div>
          <form onSubmit={handleSearchSubmit} className="search-bar">
            <input
              type="text"
              placeholder="Search..."
              value={searchTerm}
              onChange={handleSearchChange}
            />
            <button type="submit">Subscribe</button>
          </form>
        </MDBContainer>
      </section>


      <div className="text-center p-4" style={{ backgroundColor: "#E9A401" }}>

      <div> 
       <MDBContainer>
       <MDBRow style={{height:"70px"}}>
      
        <MDBCol size='sm'>
          <div>Free Shipping</div>

          
        <img
                        className="d-block w-70"
                        src={process.env.PUBLIC_URL + "/image/footer/i1.png"}
                        alt="Fourth slide"
                        style={{ maxWidth: "11rem",objectFit: "cover", margin: "auto", marginTop: "-45px" }}
                    /> 
   
             
        </MDBCol>
        <MDBCol size='sm'>100% Protection
         
        <img
                        className="d-block w-70"
                        src={process.env.PUBLIC_URL + "/image/footer/i2.png"}
                        alt="Fourth slide"
                        style={{ maxWidth: "6rem", objectFit: "cover",margin: "auto" }}
                    />
        </MDBCol>
        <MDBCol size='sm'>Secure Payment
          
        <img
                        className="d-block w-70"
                        src={process.env.PUBLIC_URL + "/image/footer/i3.png"}
                        alt="Fourth slide"
                        style={{ maxWidth: "6rem", objectFit: "cover", margin: "auto" }}
                    />
        </MDBCol>
        <MDBCol size='sm'>Assured Quality

          
          <img
                          className="d-block w-70"
                          src={process.env.PUBLIC_URL + "/image/footer/i4.png"}
                          alt="Fourth slide"
                          style={{ maxWidth: "6rem", objectFit: "cover", margin: "auto" }}
                      />
          </MDBCol>
          <MDBCol size='sm'>Authentic Products
          
          <img
                          className="d-block w-70"
                          src={process.env.PUBLIC_URL + "/image/footer/i5.png"}
                          alt="Fourth slide"
                          style={{ maxWidth: "6rem", objectFit: "cover", margin: "auto"}}
                      />
          </MDBCol>
          <MDBCol size='sm'>Best Price Promise
          
          <img
                          className="d-block w-70"
                          src={process.env.PUBLIC_URL + "/image/footer/i3.png"}
                          alt="Fourth slide"
                          style={{ maxWidth: "6rem", objectFit: "cover", margin: "auto" }}
                      />
          </MDBCol>
      </MDBRow>
      </MDBContainer>
      <br/>
      <div style={{color:"black", marginLeft:"50px", marginRight:"50px"}} >  
           <hr className='horizontal black mb-4 mt-lg-4 my-4' />
           </div>

       </div>


        <Nav
          className="Navs"
          style={{ display: "flex", marginRight: "30%", fontSize: "large" }}
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
        </Nav>

        <footer className="footer">
          <div className="footer-section social-media">
            <Link to="/Logiin" className="iconitem">
              <MDBIcon style={{ color: "black" }} fab icon="facebook-f" />
            </Link>
            <Link to="" className="iconitem">
              <MDBIcon style={{ color: "black" }} fab icon="twitter" />
            </Link>
            <Link to="/Wishlist" className="iconitem">
              <MDBIcon style={{ color: "black" }} fab icon="instagram" />
            </Link>
            <Link to="/Wishlist" className="iconitem">
              <MDBIcon color="black" fab icon="google" />
            </Link>
          </div>
          <div className="footer-section company-name">
            <p style={{ fontSize: "medium" }}>© 2024, ARTISAN.</p>
          </div>
          <div className="footer-section payment-icons">
            <Link to="/Logiin" className="iconitem">
              <MDBIcon style={{ color: "black" }} fab icon="facebook-f" />
            </Link>
            <Link to="" className="iconitem">
              <MDBIcon style={{ color: "black" }} fab icon="twitter" />
            </Link>
            <Link to="/Wishlist" className="iconitem">
              <MDBIcon style={{ color: "black" }} fab icon="instagram" />
            </Link>
          </div>
        </footer>
      </div>
      
    </MDBFooter></>
  );
}
