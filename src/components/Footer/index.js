import React, { useState } from "react";
import { Col, Container, InputGroup, Form, Row, Button } from "react-bootstrap";
import {
  brands,
  solid,
  regular,
} from "@fortawesome/fontawesome-svg-core/import.macro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

// import { Form } from 'react-router-dom'

// images

export default function Footer() {
  const [expanded, setExpanded] = useState(false);
  const setExpand = () => {
    setExpanded(false);
    window.scrollTo(0, 0);
  };
  return (
    <>
      <div className="main-footer">
        <Container>
          <Row>
            <Col md={5}>
              <div className="footer-first">
                <h2>your logo here</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  doeiusmod tempor incididunt tetur adipisicing elit, sed do
                  eiusmoLorem ipsum dolor sit amet, consectetur adipisicing
                </p>

                <strong>COPYRIGHT 2023, . ALL RIGHTS RESERVED.</strong>
              </div>
            </Col>

            <Col md={3}>
              <div className="usefull-links">
                <h2>Usefull Link</h2>
                <div className="inner-useful">
                  <ul>
                    <li>
                      <FontAwesomeIcon icon={solid("check")} />
                      <Link to="/">Home</Link>
                    </li>
                    <li>
                      <FontAwesomeIcon icon={solid("check")} />
                      <Link to="/">About Us </Link>
                    </li>
                    <li>
                      <FontAwesomeIcon icon={solid("check")} />
                      <Link to="/">Collection</Link>
                    </li>
                    <li>
                      <FontAwesomeIcon icon={solid("check")} />
                      <Link to="/">Shop</Link>
                    </li>
                    <li>
                      <FontAwesomeIcon icon={solid("check")} />
                      <Link to="/">Contact Us</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </Col>

            <Col md={4}>
              <div className="get-footer">
                <h2>Get in Touch!</h2>
                <h4>
                  When people help people, change happens. What have you given
                  today?
                </h4>
                <div className="d-flex">
                  <strong>Call:</strong>
                  <span>+222 - 1111 - 11111</span>
                </div>

                <div className="d-flex">
                  <strong>Email:</strong>
                  <span>domain@gmail.com</span>
                </div>

                <div className="d-flex">
                  <strong>Address:</strong>
                  <span>000 Lorem ipsum 254</span>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}
