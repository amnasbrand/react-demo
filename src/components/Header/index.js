import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  Container,
  Row,
  Col,
  InputGroup,
  Form,
  Button,
  DropdownButton,
  Dropdown,
  Nav,
  NavDropdown,
  Navbar,
  Image,
} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  solid,
  regular,
  brands,
} from "@fortawesome/fontawesome-svg-core/import.macro";

// IMAGES
import siteLogo from "assets/logo.png";

export default function Header() {
  const [expanded, setExpanded] = useState(false);

  const setExpand = () => {
    setExpanded(false);
    window.scrollTo(0, 0);
  };

  const Data = ["1", "2", "3", "4"];

  return (
    <>
      <div className="main-top-header">
        <div className="bg-top-bg">
          <Container>
            <Row className="align-items-center">
              <Col md={6}>
                <Row>
                  <Col md={4}>
                    <div className="inner-top">
                      <span>Language</span>

                      <select>
                        {Data.map((x, y) => (
                          <option key={y}>{x}</option>
                        ))}
                      </select>
                    </div>
                  </Col>
                  <Col md={4}>
                    <div className="inner-top">
                      <span>Currency:</span>
                      <Dropdown>
                        <select>
                          {Data.map((x, y) => (
                            <option key={y}>{x}</option>
                          ))}
                        </select>
                      </Dropdown>
                    </div>
                  </Col>
                </Row>
              </Col>

              <Col md={6}>
                <div className="top-text">
                  <strong>
                    70% off Everything + Free Shipping| Use Code: FREESHIP
                  </strong>
                </div>
              </Col>
            </Row>
          </Container>
        </div>

        <div className="secon-top">
          <Container>
            <Row>
              <Col md={6} className="image-logo">
                <div className="header-image">
                  <Link to={"/"}>
                    <Image src={siteLogo} alt="MyImage" />
                  </Link>
                </div>
              </Col>

              <Col md={6}>
                <Navbar className=" justify-content-between">
                  <Form inline>
                    <Row>
                      <Col xs="auto">
                        <Form.Control
                          type="text"
                          placeholder="Search"
                          className=" mr-sm-2"
                        />
                      </Col>
                      <Col xs="auto">
                        <Button type="submit">Submit</Button>
                      </Col>
                    </Row>
                  </Form>
                </Navbar>
              </Col>
            </Row>
          </Container>
        </div>

        <header>
          <div className="main-header">
            <Container>
              <Row>
                <Col md={12}>
                  <Row>
                    <div className="inner-nav">
                      <Col md={6}>
                        <Nav
                          activeKey="/home"
                          onSelect={(selectedKey) =>
                            alert(`selected ${selectedKey}`)
                          }
                        >
                          <Nav.Item>
                            <Nav.Link href="/home">Home </Nav.Link>
                          </Nav.Item>
                          <Nav.Item>
                            <Nav.Link eventKey="link-1">About us</Nav.Link>
                          </Nav.Item>
                          <Nav.Item>
                            <Nav.Link eventKey="link-2">Shop</Nav.Link>
                          </Nav.Item>
                          <Nav.Item>
                            <Nav.Link eventKey="link-3">Collection</Nav.Link>
                          </Nav.Item>
                          <Nav.Item>
                            <Nav.Link eventKey="link-4">Accessories</Nav.Link>
                          </Nav.Item>
                          <Nav.Item>
                            <Nav.Link eventKey="link-2">Contact us</Nav.Link>
                          </Nav.Item>
                        </Nav>
                      </Col>

                      <Col md={6}>
                        <div className="right-nav">
                          <span>Cart / $ 1 199.00</span>
                          <div className="nav-icon">
                            <FontAwesomeIcon icon={solid("cart-shopping")} />
                            <FontAwesomeIcon icon={regular("address-book")} />
                            <FontAwesomeIcon icon={regular("heart")} />
                          </div>
                        </div>
                      </Col>
                    </div>
                  </Row>
                </Col>
              </Row>
            </Container>
          </div>
        </header>
      </div>
    </>
  );
}
