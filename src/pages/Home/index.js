import { solid, regular } from "@fortawesome/fontawesome-svg-core/import.macro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState, useRef } from "react";
import {
  Container,
  Row,
  Col,
  Image,
  Tabs,
  Tab,
  Form,
  Button,
  FloatingLabel,
} from "react-bootstrap";
import emailjs from "@emailjs/browser";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";

import BannerImage from "assets/banner-1.png";
import HoodieImage from "assets/hoodie.png";
import HoodieImage1 from "assets/hoodie1.png";
import HoodieImage2 from "assets/hoodie2.png";
import HoodieImage3 from "assets/hoodie3.png";
import HoodieImage4 from "assets/hoodie4.png";
import HoodieImage5 from "assets/hoodie5.png";
import collecImage1 from "assets/collec1.png";
import ArrivalImage1 from "assets/arrival1.png";
import ArrivalImage2 from "assets/arrival2.png";
import ArrivalImage3 from "assets/arrival3.png";
import ArrivalImage4 from "assets/arrival4.png";
import ArrivalImage5 from "assets/arrival5.png";
import ArrivalImage6 from "assets/arrival6.png";
import ArrivalImage7 from "assets/arrival7.png";
import ArrivalImage8 from "assets/arrival8.png";
import ArrivalImage9 from "assets/arrival9.png";
import ArrivalImage10 from "assets/arrival10.png";
import ArrivalImage11 from "assets/arrival11.png";
import ArrivalImage12 from "assets/arrival12.png";
import StunningImage from "assets/stunning.png";
import StunningImage1 from "assets/stunning1.png";
import stunnBg from "assets/stunn-bg.png";
import PopularImage from "assets/popular.png";
import PopularImage1 from "assets/popular1.png";
import PopularImage2 from "assets/popular2.png";
import baseImage from "assets/base.png";

export default function Home() {
  const Listproducts = [
    {
      id: "1",
      title: "Lorem Ipsum",
      price: "$120",
      image: HoodieImage,
    },

    {
      id: "2",
      title: "Lorem Ipsum",
      price: "$100",
      image: HoodieImage1,
    },

    {
      id: "3",
      title: "Lorem Ipsum",
      price: "$70",
      image: HoodieImage2,
    },

    {
      id: "4",
      title: "Lorem Ipsum",
      price: "$100",
      image: HoodieImage3,
    },

    {
      id: "5",
      title: "Lorem Ipsum",
      price: "$120",
      image: HoodieImage4,
    },

    {
      id: "6",
      title: "Lorem Ipsum",
      price: "$110",
      image: HoodieImage5,
    },
  ];

  const Accessoriesproducts = [
    {
      id: "1",
      title: "Lorem Ipsum",
      price: "$120",
      image: HoodieImage,
    },

    {
      id: "2",
      title: "Lorem Ipsum",
      price: "$100",
      image: HoodieImage1,
    },

    {
      id: "3",
      title: "Lorem Ipsum",
      price: "$70",
      image: HoodieImage2,
    },

    {
      id: "4",
      title: "Lorem Ipsum",
      price: "$100",
      image: HoodieImage3,
    },

    {
      id: "5",
      title: "Lorem Ipsum",
      price: "$120",
      image: HoodieImage4,
    },

    {
      id: "6",
      title: "Lorem Ipsum",
      price: "$110",
      image: HoodieImage5,
    },
  ];

  const Shirtsproducts = [
    {
      id: "1",
      title: "Lorem Ipsum",
      price: "$120",
      image: HoodieImage,
    },

    {
      id: "2",
      title: "Lorem Ipsum",
      price: "$100",
      image: HoodieImage1,
    },

    {
      id: "3",
      title: "Lorem Ipsum",
      price: "$70",
      image: HoodieImage2,
    },

    {
      id: "4",
      title: "Lorem Ipsum",
      price: "$100",
      image: HoodieImage3,
    },

    {
      id: "5",
      title: "Lorem Ipsum",
      price: "$120",
      image: HoodieImage4,
    },

    {
      id: "6",
      title: "Lorem Ipsum",
      price: "$110",
      image: HoodieImage5,
    },
  ];

  const Collectionproducts = [
    {
      id: "1",
      image: collecImage1,
      text: {
        span: "Get UP TO 60%",
        strong: "MEN SHIRTS",
        p: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever",
      },
    },
    {
      id: "2",
      image: collecImage1,
      text: {
        span: "Get UP TO 60%",
        strong: "MEN SHIRTS",
        p: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever",
      },
    },
    {
      id: "3",
      image: collecImage1,
      text: {
        span: "Get UP TO 60%",
        strong: "MEN SHIRTS",
        p: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever",
      },
    },
    // Add more items as needed
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const Productarrival = [
    {
      id: "1",
      title: "Lorem Ipsum is simpl",
      price: "$120",
      image: ArrivalImage1,
    },

    {
      id: "2",
      title: "Lorem Ipsum is simpl",
      price: "$120",
      image: ArrivalImage2,
    },

    {
      id: "3",
      title: "Lorem Ipsum is simpl",
      price: "$120",
      image: ArrivalImage3,
    },

    {
      id: "4",
      title: "Lorem Ipsum is simpl",
      price: "$120",
      image: ArrivalImage4,
    },

    {
      id: "5",
      title: "Lorem Ipsum is simpl",
      price: "$120",
      image: ArrivalImage5,
    },

    {
      id: "6",
      title: "Lorem Ipsum is simpl",
      price: "$120",
      image: ArrivalImage6,
    },

    {
      id: "7",
      title: "Lorem Ipsum is simpl",
      price: "$120",
      image: ArrivalImage7,
    },

    {
      id: "8",
      title: "Lorem Ipsum is simpl",
      price: "$120",
      image: ArrivalImage8,
    },

    {
      id: "9",
      title: "Lorem Ipsum is simpl",
      price: "$120",
      image: ArrivalImage9,
    },

    {
      id: "10",
      title: "Lorem Ipsum is simpl",
      price: "$120",
      image: ArrivalImage10,
    },

    {
      id: "11",
      title: "Lorem Ipsum is simpl",
      price: "$120",
      image: ArrivalImage11,
    },

    {
      id: "12",
      title: "Lorem Ipsum is simpl",
      price: "$120",
      image: ArrivalImage12,
    },
  ];

  const Popularproducts = [
    {
      id: "1",
      title: "Lorem Ipsum",
      price: "$120",
      image: PopularImage,
    },

    {
      id: "2",
      title: "Lorem Ipsum",
      price: "$100",
      image: HoodieImage,
    },

    {
      id: "3",
      title: "Lorem Ipsum",
      price: "$70",
      image: HoodieImage1,
    },

    {
      id: "4",
      title: "Lorem Ipsum",
      price: "$100",
      image: PopularImage1,
    },

    {
      id: "5",
      title: "Lorem Ipsum",
      price: "$120",
      image: HoodieImage3,
    },

    {
      id: "6",
      title: "Lorem Ipsum",
      price: "$110",
      image: PopularImage2,
    },
  ];

  // const [isActive, setIsActive] = useState(false);

  // const handleHeartClick = () => {
  //   setIsActive(!isActive);
  // };

  const myStyle = {
    backgroundImage: `url(${stunnBg})`,
    width: "100%",
  };

  const myStyletwo = {
    backgroundImage: `url(${baseImage})`,
    width: "100%",
  };

  // email

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
  
    emailjs
      .sendForm(
        "service_3lqf365",
        "template_7wrovbm",
        form.current,
        "hm1vnFmGqaJDg78KQ"
      )
      .then(
        (result) => {
          alert("Your Email Send Successfully");
  
          // Reset the form fields
          form.current.reset();
        },
        (error) => {
          alert(error.text);
        }
      );
  }

  return (
    <>
      <div className="main-banner">
        <Container>
          <Row className="align-items-center">
            <Col md={6}>
              <div className="banner-text">
                <h2>Welcome To fashionette</h2>
                <p>
                  The place for the wedding ceremony is the most important part
                  because it will witness the history of your love story, so
                  make sure you don't choose the wrong one make sure you don't
                  choose the wrong one
                </p>

                <Link to="/" className="black-button">
                  SHOP NOW
                </Link>
              </div>
            </Col>

            <Col md={6}>
              <div className="banner-image">
                <Image src={BannerImage} alt="MyImage" />
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <div className="home-tabs">
        <Container>
          <Row>
            <div className="tab-content">
              <h2>Best Seller ITEMS</h2>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever
              </p>
            </div>
            <Tabs animation={false} id="noanim-tab-example">
              {
                <Tab eventKey={1} title="Hoodies">
                  <div className="main-hoodies">
                    <Row>
                      {Listproducts.map((product) => (
                        <Col key={product.id} md={2}>
                          <div className="inner-hppdie">
                            <div className="image-box">
                              <Image
                                src={product.image}
                                alt={`Product: ${product.title}`}
                              />
                            </div>
                            <div className="hoodie-text">
                              <span>{product.title}</span>
                              <FontAwesomeIcon icon={regular("heart")} />
                            </div>
                            <div className="hoodie-stars">
                              <ul>
                                {[...Array(5)].map((_, index) => (
                                  <li key={index}>
                                    {index < 4 ? (
                                      <FontAwesomeIcon icon={solid("star")} />
                                    ) : (
                                      <FontAwesomeIcon
                                        icon={solid("star-half-stroke")}
                                      />
                                    )}
                                  </li>
                                ))}
                              </ul>
                              <strong>{product.price}</strong>
                            </div>
                          </div>
                        </Col>
                      ))}
                    </Row>
                  </div>
                </Tab>
              }

              {
                <Tab eventKey={2} title="Accessories">
                  <div className="main-hoodies">
                    <Row>
                      {Accessoriesproducts.map((product) => (
                        <Col key={product.id} md={2}>
                          <div className="inner-hppdie">
                            <div className="image-box">
                              <Image
                                src={product.image}
                                alt={`Product: ${product.title}`}
                              />
                            </div>
                            <div className="hoodie-text">
                              <span>{product.title}</span>
                              <FontAwesomeIcon icon={regular("heart")} />
                            </div>
                            <div className="hoodie-stars">
                              <ul>
                                {[...Array(5)].map((_, index) => (
                                  <li key={index}>
                                    {index < 4 ? (
                                      <FontAwesomeIcon icon={solid("star")} />
                                    ) : (
                                      <FontAwesomeIcon
                                        icon={solid("star-half-stroke")}
                                      />
                                    )}
                                  </li>
                                ))}
                              </ul>
                              <strong>{product.price}</strong>
                            </div>
                          </div>
                        </Col>
                      ))}
                    </Row>
                  </div>
                </Tab>
              }

              {
                <Tab eventKey={3} title="Shirts">
                  <div className="main-hoodies">
                    <Row>
                      {Shirtsproducts.map((product) => (
                        <Col key={product.id} md={2}>
                          <div className="inner-hppdie">
                            <div className="image-box">
                              <Image
                                src={product.image}
                                alt={`Product: ${product.title}`}
                              />
                            </div>
                            <div className="hoodie-text">
                              <span>{product.title}</span>
                              <FontAwesomeIcon icon={regular("heart")} />
                            </div>
                            <div className="hoodie-stars">
                              <ul>
                                {[...Array(5)].map((_, index) => (
                                  <li key={index}>
                                    {index < 4 ? (
                                      <FontAwesomeIcon icon={solid("star")} />
                                    ) : (
                                      <FontAwesomeIcon
                                        icon={solid("star-half-stroke")}
                                      />
                                    )}
                                  </li>
                                ))}
                              </ul>
                              <strong>{product.price}</strong>
                            </div>
                          </div>
                        </Col>
                      ))}
                    </Row>
                  </div>
                </Tab>
              }

              {
                <Tab eventKey={4} title="Others">
                  Tab 3 content
                </Tab>
              }
            </Tabs>
          </Row>
          <div className="main-tab-button">
            <Link to="/" className="orange-button">
              See More Products
            </Link>
          </div>
        </Container>
      </div>

      {/* collection */}
      <div className="main-collection">
        <div className="animated-element">
          <div className="tab-content">
            <h2>LATEST COLLECTION</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever
            </p>
          </div>
        </div>
        <Container>
          <Row>
            <Slider {...sliderSettings}>
              {Collectionproducts.map((collectionItem) => (
                <div key={collectionItem.id}>
                  <Row>
                    <Col md={6}>
                      <div className="inner-latest">
                        <Row>
                          <Col md={6}>
                            <div className="collection-image">
                              <Image
                                src={collectionItem.image}
                                alt="collection-image"
                              />
                            </div>
                          </Col>

                          <Col md={6}>
                            <div className="top-collec-text">
                              <div className="collection-text">
                                <span>{collectionItem.text.span}</span>
                                <div className="strong-text">
                                  <strong>
                                    {collectionItem.text.strong} <br />{" "}
                                    <span>New One</span>
                                  </strong>
                                </div>
                                <p>{collectionItem.text.p}</p>
                                <div className="collection-btn">
                                  <Link to="/">SHOP NOW</Link>
                                </div>
                              </div>
                            </div>
                          </Col>
                        </Row>
                      </div>
                    </Col>

                    <Col md={6}>
                      <div className="inner-latest">
                        <Row>
                          <Col md={6}>
                            <div className="collection-image">
                              <Image
                                src={collectionItem.image}
                                alt="collection-image"
                              />
                            </div>
                          </Col>

                          <Col md={6}>
                            <div className="top-collec-text">
                              <div className="collection-text">
                                <span>{collectionItem.text.span}</span>
                                <div className="strong-text">
                                  <strong>
                                    {collectionItem.text.strong} <br />{" "}
                                    <span>New One</span>
                                  </strong>
                                </div>
                                <p>{collectionItem.text.p}</p>
                                <div className="collection-btn">
                                  <Link to="/">SHOP NOW</Link>
                                </div>
                              </div>
                            </div>
                          </Col>
                        </Row>
                      </div>
                    </Col>
                  </Row>
                </div>
              ))}
            </Slider>
          </Row>
        </Container>
      </div>
      {/* collection end*/}

      {/* arrival */}
      <div className="main-arrival">
        <div className="tab-content">
          <h2>Latest Arrival</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever
          </p>
        </div>

        <Container>
          <Row>
            {Productarrival.map((product) => (
              <Col key={product.id} md={3}>
                <div className="product-arrival">
                  <div className="inner-hppdie">
                    <div className="image-box">
                      <Link to="/">
                        <Image
                          src={product.image}
                          alt={`Product: ${product.title}`}
                        />
                      </Link>
                      <div className="badge">
                        <span>New</span>
                      </div>
                    </div>
                    <div className="hoodie-text">
                      <span>{product.title}</span>
                      <FontAwesomeIcon icon={regular("heart")} />
                    </div>
                    {/* <div className="hoodie-stars">
                      <ul>
                        {[...Array(5)].map((_, index) => (
                          <li key={index}>
                            {index < 4 ? (
                              <FontAwesomeIcon icon={solid("star")} />
                            ) : (
                              <FontAwesomeIcon
                                icon={solid("star-half-stroke")}
                              />
                            )}
                          </li>
                        ))}
                      </ul>
                    </div> */}
                    <strong>{product.price}</strong>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
        <div className="main-tab-button">
          <Link to="/" className="orange-button">
            See More Products
          </Link>
        </div>
      </div>
      {/* arrival end*/}

      {/* stunning */}
      <div className="main-stunning " style={myStyle}>
        <Container>
          <Row>
            <Col md={6}>
              <div className="inner-image">
                <Image src={StunningImage} alt="" />

                <div className="image-border">
                  <div className="inner-image-stun">
                    <Image src={StunningImage1} alt="" />
                  </div>
                </div>
              </div>
            </Col>

            <Col md={6}>
              <div className="stunning-text">
                <h2>Stunning Decorations To Look At</h2>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever Lorem Ipsum has been the industry's
                  standard dummy text ever
                </p>

                <Row>
                  <Col md={4}>
                    <div className="stunn-btn">
                      <div className="collection-btn">
                        <Link to="/">SHOP NOW</Link>
                      </div>
                    </div>
                  </Col>
                  <Col md={4}>
                    <div className="stunn-btn look-btn">
                      <div className="collection-btn">
                        <Link to="/">SHOP NOW</Link>
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      {/* stunning end*/}

      {/* popular product */}
      <div className="main-popular-product">
        <div className="tab-content">
          <h2>Pupolar Products</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever
          </p>
        </div>
        <Container>
          <div className="main-hoodies">
            <Row>
              {Popularproducts.map((product) => (
                <Col key={product.id} md={2}>
                  <div className="inner-hppdie">
                    <div className="image-box">
                      <Image
                        src={product.image}
                        alt={`Product: ${product.title}`}
                      />

                      <div className="hover-bottom">
                        <div className="inner-hover">
                          <FontAwesomeIcon icon={solid("magnifying-glass")} />
                          <strong>View Details</strong>
                        </div>
                      </div>
                    </div>
                    <div className="hoodie-text">
                      <span>{product.title}</span>
                      <div className={`heart-icon`}>
                        <FontAwesomeIcon icon={regular("heart")} />
                      </div>
                    </div>
                    <div className="hoodie-stars">
                      <ul>
                        {[...Array(5)].map((_, index) => (
                          <li key={index}>
                            {index < 4 ? (
                              <FontAwesomeIcon icon={solid("star")} />
                            ) : (
                              <FontAwesomeIcon
                                icon={solid("star-half-stroke")}
                              />
                            )}
                          </li>
                        ))}
                      </ul>
                      <strong>{product.price}</strong>
                    </div>
                  </div>
                </Col>
              ))}
            </Row>
          </div>
          <div className="main-tab-button">
            <Link to="/" className="orange-button">
              See More Products
            </Link>
          </div>
        </Container>
      </div>
      {/* popular product end*/}

      {/* form section */}
      <div className="main-contact" style={myStyletwo}>
        <Container>
          <div className="tab-content">
            <h2>Ready to get started</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s.
            </p>
          </div>
          <Row>
            <Col md={12}>
              <div className="inner-contact">
                <Form ref={form} onSubmit={sendEmail}>
                  <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridName">
                      <Form.Control type="text" placeholder="Name *" name="to_name" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridEmail">
                      <Form.Control type="email" placeholder="Email *" name="email" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridPhone">
                      <Form.Control type="tel" placeholder="Phone Number *" name="phone" />
                    </Form.Group>
                  </Row>

                  

                 
                    <Form.Control
                      as="textarea"
                      placeholder="Leave a comment here"
                      style={{ height: "150px" }}
                    />
                  

                  <div className="form-btn">
                    <Button className="black-button" type="submit">
                      Submit
                    </Button>
                  </div>
                </Form>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}
