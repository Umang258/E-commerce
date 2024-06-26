import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import { LinkContainer } from "react-router-bootstrap";
import { MDBIcon } from "mdbreact";
import { NavDropdown, Navbar, Nav } from "react-bootstrap";
import "../Layout/Navbar.css"; // Ensure to create and use a custom CSS file

const Navebar = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const handleMouseEnter = () => {
    setShowDropdown(true);
  };

  const handleMouseLeave = () => {
    setShowDropdown(false);
  };

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <>
      <NavDropdown.Divider />
      <Navbar expand="lg" className="custom-navbar" variant="light" style={{fontFamily: "DM Serif Display", fontSize: "20px"}}>
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" style={{background: "transparant"}} > <MDBIcon fas icon="align-justify" /> </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto justify-content-center">
              <LinkContainer to="/">
                <Nav.Link>
                  <b>Home</b>
                </Nav.Link>
              </LinkContainer>

              <LinkContainer to="/products">
                <Nav.Link>
                  <b>All Products</b>
                </Nav.Link>
              </LinkContainer>

              <LinkContainer to="/about">
                <Nav.Link>
                  <b>About</b>
                </Nav.Link>
              </LinkContainer>

              <div
                className="nav-links"
                onClick={toggleDropdown}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <Nav.Link>
                  <b>Category</b>
                </Nav.Link>
              </div>
              {showDropdown && (
                <div
                to="/"
                  className="navbar-dropdown"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  onClick={toggleDropdown}
                >
                  
                  <div className="dropdown-section">
                    <h3>Religious items</h3>
                    <ul>
                      <LinkContainer to="/IncenseSticks">
                        <Nav.Link>
                          <li>Incense Sticks</li>
                        </Nav.Link>
                      </LinkContainer>
                      <LinkContainer to="/IncenseSticks">
                        <Nav.Link>
                          <li>Essential Oil</li>
                        </Nav.Link>
                      </LinkContainer>
                      <LinkContainer to="/IncenseSticks">
                        <Nav.Link>
                          <li>Incense cones</li>
                        </Nav.Link>
                      </LinkContainer>
                    </ul>
                  </div>

                  <div className="dropdown-section">
                  <h3>Home and living</h3>
                  <ul>
                    <LinkContainer to="/ajrakh">
                      <Nav.Link><li>Wall Decore</li></Nav.Link>
                    </LinkContainer>
                  
                  
                    <LinkContainer to="/ajrakh">
                      <Nav.Link><li>Home Decore</li></Nav.Link>
                    </LinkContainer>
                  
                  
                    <LinkContainer to="/ajrakh">
                      <Nav.Link><li>Kitchen & Dining</li></Nav.Link>
                    </LinkContainer>
                    </ul>
                  </div>
                  
                  <div className="dropdown-section">
                    <h3>Sarees</h3>
                    <ul>
                      <LinkContainer to="/Chikankari">
                        <Nav.Link>
                          <li>Chikankari</li>
                        </Nav.Link>
                      </LinkContainer>
                      <LinkContainer to="/Madhubani">
                        <Nav.Link>
                          <li>Madhubani</li>
                        </Nav.Link>
                      </LinkContainer>
                      <LinkContainer to="/Ajrakh">
                        <Nav.Link>
                          <li>Ajrakh</li>
                        </Nav.Link>
                      </LinkContainer>
                    </ul>
                  </div>
                  <div className="dropdown-section">
                    <h3>OTHERS</h3>
                    <ul>
                      <LinkContainer to="/Chikankari">
                        <Nav.Link>
                          <li>Toys</li>
                        </Nav.Link>
                      </LinkContainer>
                      <LinkContainer to="/Madhubani">
                        <Nav.Link>
                          <li>Vases</li>
                        </Nav.Link>
                      </LinkContainer>
                      <LinkContainer to="/Ajrakh">
                        <Nav.Link>
                          <li>Bags</li>
                        </Nav.Link>
                      </LinkContainer>
                    </ul>
                  </div>
                  <div className="dropdown-images d-flex justify-content-center">
                    <div className="image-card">
                      <img
                        className="d-block my-4 sale-image"
                        src={process.env.PUBLIC_URL + "/image/footer/a2.png"}
                        alt="Sale 2"
                      />
                      <p>New Arrivals</p>
                      <a href="/new-arrivals">Shop now</a>
                    </div>
                    <div className="image-card">
                      <img
                        className="d-block my-4 sale-image"
                        src={process.env.PUBLIC_URL + "/image/footer/a1.png"}
                        alt="Sale 1"
                      />
                      <p>Recommended</p>
                      <a href="/basic-tees">Shop now</a>
                    </div>
                  </div>
                </div>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Navebar;
