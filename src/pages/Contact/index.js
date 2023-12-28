import React from "react";
import { Container, Breadcrumb, Row, Col, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Contact() {
  return (
    <>
      {/* BANNER */}
      <div className="in-page-banner">
        <Container>
          <h1 className="text-center">Contact Us</h1>
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link to="/">Home</Link>
            </li>
            <li className="breadcrumb-item active">Contact Us</li>
          </ol>
        </Container>
      </div>
      {/* END BANNER */}

      <div className="in-page-container pt-4 pb-4">
        <div className="contact-section">
          <Container>
            <Row>
              <Col md={6}>
                <div className="inner__contact">
                  <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Control type="text" placeholder="Name" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                      <Form.Control type="email" placeholder="Email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                      <Form.Control type="number" placeholder="Phone Number" />
                    </Form.Group>

                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlTextarea1"
                    >
                      <Form.Control
                        placeholder="Comment"
                        as="textarea"
                        rows={4}
                      />
                    </Form.Group>
                    <Button className="blue__btn" type="submit">
                      Submit
                    </Button>
                  </Form>
                </div>
              </Col>

              <Col md={6}>
                <div className="map__contact">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26544691.59357086!2d-116.97448852186452!3d35.693771799648786!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54eab584e432360b%3A0x1c3bb99243deb742!2sUnited%20States!5e0!3m2!1sen!2s!4v1693336126799!5m2!1sen!2s"
                    
                    allowfullscreen=""
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </>
  );
}
