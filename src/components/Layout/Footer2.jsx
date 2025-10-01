
import {
  MDBContainer,
  MDBRow,
  MDBCol,
 
} from "mdb-react-ui-kit";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "../../App.css"; // Ensure you import your custom CSS file

const Footer2 = () => {
  return (
    <div>
       <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
          <MDBContainer className="text-center text-md-start mt-5">
            <MDBRow className="mt-3">
              <MDBCol md="4" lg="3" xl="3" className="mx-auto mb-4">
                <img
                  className="d-block w-100"
                  src={process.env.PUBLIC_URL + "/image/footer/f3.jpeg"}
                  alt="Footer image 1"
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

              <MDBCol md="4" lg="3" xl="3" className="mx-auto mb-4">
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
    </div>
  )
}

export default Footer2;
