import React from 'react';
import { Container, Row, Col, Button, Image, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const ProductDetail = () => {
  return (
    <Container className="py-5">
      <Row>
        <Col lg={6} className="d-flex align-items-center">
          <Image src={process.env.PUBLIC_URL + "/image/sticks/s2.png"} alt="ecommerce" fluid rounded />
        </Col>
        <Col lg={6}>
          <Card className="border-0">
            <Card.Body>
              <Card.Subtitle className="mb-2 text-muted">PHOOL</Card.Subtitle>
              <Card.Title className="mb-3">PHOOL AYODHYA SOUMYA CHANDAN INCENSE STICKS</Card.Title>
              <Row className="mb-4">
                <Col>
                  <div className="d-flex align-items-center">
                    {[...Array(4)].map((_, index) => (
                      <svg
                        key={index}
                        fill="currentColor"
                        className="bi bi-star-fill text-warning me-1"
                        viewBox="0 0 16 16"
                        width="16"
                        height="16"
                      >
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.32-.158-.888.283-.95l4.898-.696 2.181-4.411c.197-.397.73-.397.927 0l2.181 4.411 4.898.696c.441.063.612.63.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                      </svg>
                    ))}
                    <svg
                      fill="currentColor"
                      className="bi bi-star text-warning"
                      viewBox="0 0 16 16"
                      width="16"
                      height="16"
                    >
                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.32-.158-.888.283-.95l4.898-.696 2.181-4.411c.197-.397.73-.397.927 0l2.181 4.411 4.898.696c.441.063.612.63.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                    </svg>
                    <span className="ms-2 text-muted">4 Reviews</span>
                  </div>
                </Col>
                <Col className="d-flex justify-content-end">
                  <Button variant="link" className="text-muted">
                    <i className="bi bi-facebook"></i>
                  </Button>
                  <Button variant="link" className="text-muted ms-2">
                    <i className="bi bi-twitter"></i>
                  </Button>
                  <Button variant="link" className="text-muted ms-2">
                    <i className="bi bi-instagram"></i>
                  </Button>
                </Col>
              </Row>
              <Card.Text>
              Embark on a spiritual journey with the Phool Ayodhya Soumya Chandan Incense Sticks.<br/>

❀ Handcrafted using the sacred flowers from temples in Ayodhya<br />
❋ Made using a blend of flowers, 100% pure extracts of Chandan, and traditional herbs<br/>
❈ The pack consists of 40 units<br/>
❂ Long burning time of 40-45 minutes per stick<br/>
❁ The fragrance is rich and aromatic with warm undertones of amber and wood<br/>
❃ The authentic scent of Chandan helps in refreshing and energizing the mind and body<br/>
✼ These sticks are ideal for your daily rituals and prayers<br/>
              </Card.Text>
              {/* <Row className="mt-4 mb-3">
                <Col xs={3}>
                  <Form.Label>Color</Form.Label>
                </Col>
                <Col>
                  <Button variant="outline-secondary" className="rounded-circle p-2 me-2"></Button>
                  <Button variant="dark" className="rounded-circle p-2 me-2"></Button>
                  <Button variant="warning" className="rounded-circle p-2"></Button>
                </Col>
              </Row> */}
              {/* <Row className="mb-4">
                <Col xs={3}>
                  <Form.Label>Size</Form.Label>
                </Col>
                <Col>
                  <Form.Select>
                    <option>SM</option>
                    <option>M</option>
                    <option>L</option>
                    <option>XL</option>
                  </Form.Select>
                </Col>
              </Row> */}
              <Row className="align-items-center">
                <Col>
                  <h4 className="mb-0">$58.00</h4>
                </Col>
                <Col className="d-flex justify-content-end">
                  <Button variant="warning" className="me-2">
                    Add to Cart
                  </Button>
                  <Button variant="outline-secondary" className="rounded-circle p-0">
                    <i className="bi bi-heart"></i>
                  </Button>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetail;
