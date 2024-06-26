
import {
    MDBBtn,
    MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBCardText,
    MDBCol,
    MDBContainer,
    MDBIcon,
    MDBInput,
    MDBRow,
    MDBTypography,
    } from "mdb-react-ui-kit";
    import React from "react";
import { Link } from "react-router-dom";

    
    export default function QuantityEdit() {
    return (
      <>    

    <section className="h-100 h-custom" style={{ backgroundColor: "#eee" }}>
   
      <MDBContainer className="py-5 h-100">
        <MDBRow className="justify-content-center align-items-center h-100">
          <MDBCol size="12">
            <MDBCard className="card-registration card-registration-2" style={{ borderRadius: "15px" }}>
              <MDBCardBody className="p-0">
                <MDBRow className="g-0">
                  <MDBCol lg="8">
                    <div className="p-5">
                      <div className="d-flex justify-content-between align-items-center mb-5">
                        <MDBTypography tag="h1" className="fw-bold mb-0 text-black">
                          Shopping Cart
                        </MDBTypography>
                        <MDBTypography className="mb-0 text-muted">
                          3 items
                        </MDBTypography>
                      </div>
    
                      <hr className="my-4" />
    
                      <MDBRow className="mb-4 d-flex justify-content-between align-items-center">
                        <MDBCol md="2" lg="2" xl="2">
                          <MDBCardImage
                           src={process.env.PUBLIC_URL + "/image/madhubani/m11.png"}
                            fluid className="rounded-3" alt="chikankari" />
                        </MDBCol>
                        <MDBCol md="3" lg="3" xl="3">
                          <MDBTypography tag="h6" className="text-muted">
                            Sharee
                          </MDBTypography>
                          <MDBTypography tag="h6" className="text-black mb-0">
                            Chikankari
                          </MDBTypography>
                        </MDBCol>
                        <MDBCol md="3" lg="3" xl="3" className="d-flex align-items-center">
                          <MDBBtn color="link" className="px-2">
                            <MDBIcon fas icon="minus" />
                          </MDBBtn>
    
                          <MDBInput type="number" min="0" defaultValue={1} size="sm" />
    
                          <MDBBtn color="link" className="px-2">
                            <MDBIcon fas icon="plus" />
                          </MDBBtn>
                        </MDBCol>
                        <MDBCol md="3" lg="2" xl="2" className="text-end">
                          <MDBTypography tag="h6" className="mb-0">
                          ₹ 440.00
                          </MDBTypography>
                        </MDBCol>
                        <MDBCol md="1" lg="1" xl="1" className="text-end">
                          <a href="#!" className="text-muted">
                            <MDBIcon fas icon="times" />
                          </a>
                        </MDBCol>
                      </MDBRow>
    
                      <hr className="my-4" />
    
                      <MDBRow className="mb-4 d-flex justify-content-between align-items-center">
                        <MDBCol md="2" lg="2" xl="2">
                          <MDBCardImage
                            src={process.env.PUBLIC_URL + "/image/madhubani/m11.png"}
                            fluid className="rounded-3" alt="Dhaaga Bag" />
                        </MDBCol>
                        <MDBCol md="3" lg="3" xl="3">
                          <MDBTypography tag="h6" className="text-muted">
                          Bags
                          </MDBTypography>
                          <MDBTypography tag="h6" className="text-black mb-0">
                          Dhaaga Bag
                          </MDBTypography>
                        </MDBCol>
                        <MDBCol md="3" lg="3" xl="3" className="d-flex align-items-center">
                          <MDBBtn color="link" className="px-2">
                            <MDBIcon fas icon="minus" />
                          </MDBBtn>
    
                          <MDBInput type="number" min="0" defaultValue={1} size="sm" />
    
                          <MDBBtn color="link" className="px-2">
                            <MDBIcon fas icon="plus" />
                          </MDBBtn>
                        </MDBCol>
                        <MDBCol md="3" lg="2" xl="2" className="text-end">
                          <MDBTypography tag="h6" className="mb-0">
                          ₹ 500.00
                          </MDBTypography>
                        </MDBCol>
                        <MDBCol md="1" lg="1" xl="1" className="text-end">
                          <a href="#!" className="text-muted">
                            <MDBIcon fas icon="times" />
                          </a>
                        </MDBCol>
                      </MDBRow>
    
                      <hr className="my-4" />
    
                      <MDBRow className="mb-4 d-flex justify-content-between align-items-center">
                        <MDBCol md="2" lg="2" xl="2">
                          <MDBCardImage
                            src={process.env.PUBLIC_URL + "/image/madhubani/m11.png"}
                            fluid className="rounded-3" alt="Cotton T-shirt" />
                        </MDBCol>
                        <MDBCol md="3" lg="3" xl="3">
                          <MDBTypography tag="h6" className="text-muted">
                            Toys
                          </MDBTypography>
                          <MDBTypography tag="h6" className="text-black mb-0">
                          Single Doll
                          </MDBTypography>
                        </MDBCol>
                        <MDBCol md="3" lg="3" xl="3" className="d-flex align-items-center">
                          <MDBBtn color="link" className="px-2">
                            <MDBIcon fas icon="minus" />
                          </MDBBtn>
    
                          <MDBInput type="number" min="0" defaultValue={1} size="sm" />
    
                          <MDBBtn color="link" className="px-2">
                            <MDBIcon fas icon="plus" />
                          </MDBBtn>
                        </MDBCol>
                        <MDBCol md="3" lg="2" xl="2" className="text-end">
                          <MDBTypography tag="h6" className="mb-0">
                          ₹ 730.00
                          </MDBTypography>
                        </MDBCol>
                        <MDBCol md="1" lg="1" xl="1" className="text-end">
                          <a href="#!" className="text-muted">
                            <MDBIcon fas icon="times" />
                          </a>
                        </MDBCol>
                      </MDBRow>
    
                      <hr className="my-4" />
    
                      <div className="pt-5">
                        <MDBTypography tag="h6" className="mb-0">
                          <MDBCardText tag="a" href="#!" className="text-body">
                            <MDBIcon fas icon="long-arrow-alt-left me-2" /> Back
                            to shop
                          </MDBCardText>
                        </MDBTypography>
                      </div>
                    </div>
                  </MDBCol>
                  <MDBCol lg="4" className="bg-grey">
                    <div className="p-5">
                      <MDBTypography tag="h3" className="fw-bold mb-5 mt-2 pt-1">
                        Summary
                      </MDBTypography>
    
                      <hr className="my-4" />
    
                      <div className="d-flex justify-content-between mb-4">
                        <MDBTypography tag="h5" className="text-uppercase">
                          items 3
                        </MDBTypography>
                        <MDBTypography tag="h5">₹ 1,670.00</MDBTypography>
                      </div>
    
            
    
                      <MDBTypography tag="h5" className="text-uppercase mb-3">
                        Give code
                      </MDBTypography>
    
    
                          <input
                            className="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                            type="text" placeholder="code" id="name"></input>
                      
                      <hr className="my-4" />
    
                      <div className="d-flex justify-content-between mb-2">
                        <MDBTypography tag="h6" className="text-uppercase">
                          Total MRP
                        </MDBTypography>
                        <MDBTypography tag="h6">₹ 1,670.00</MDBTypography>
                        
                      </div>
                      <div className="d-flex justify-content-between mb-2">
                        <MDBTypography tag="h6" className="text-uppercase">
                          Discount on MRP
                        </MDBTypography>
                        <MDBTypography tag="h6">-170.00</MDBTypography>
                        
                      </div>
                      <div className="d-flex justify-content-between mb-2">
                        <MDBTypography tag="h6" className="text-uppercase">
                          Shipping fee
                        </MDBTypography>
                        <MDBTypography tag="h6">Free</MDBTypography>
                        
                      </div>
                      <hr className="my-4" />
                      <div className="d-flex justify-content-between mb-4">
                        <MDBTypography tag="h5" className="text-uppercase">
                          Total Amount
                        </MDBTypography>
                        <MDBTypography tag="h5">₹ 10.00</MDBTypography>
                        
                      </div>
    
                     <Link to="/OrderPlace"> <MDBBtn color="dark" block size="lg">
                        PLACE ORDER
                      </MDBBtn></Link>
                    </div>
                  </MDBCol>
                </MDBRow>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
    </>

    );
    }