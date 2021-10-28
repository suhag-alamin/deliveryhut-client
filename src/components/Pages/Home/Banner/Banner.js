import React from "react";
import { Button, Carousel, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Banner.css";

const Banner = () => {
  return (
    <>
      <Container fluid className="banner-section p-0">
        <Carousel variant="ligth">
          <Carousel.Item className="carousel-one">
            <Container className="px-md-5">
              <Row>
                <Col sm={12} lg={6}>
                  <div className="">
                    <h5>Welcome to</h5>
                    <h1 className="banner-title mb-2">Deliveryhut Services</h1>
                    <p className="mb-4">
                      We provide professional delivery services at Deliveryhut.
                      We make sure that your product is delivered on time.
                    </p>
                    <Link to="/services">
                      <Button className="deliveryhut-btn px-4 py-2" variant="">
                        Services
                      </Button>
                    </Link>
                  </div>
                </Col>
                <Col sm={12} lg={6}></Col>
              </Row>
            </Container>
          </Carousel.Item>

          <Carousel.Item className="carousel-two">
            <Container className="px-md-5">
              <Row>
                <Col sm={12} lg={6}></Col>
                <Col sm={12} lg={6}>
                  <div className="">
                    <h5>Transport your goods</h5>
                    <h1 className="banner-title mb-2">AROUND THE WORLD</h1>
                    <p className="mb-4">
                      No matter where you are. We will deliver your product to
                      your home on time! So, don't be worry!
                    </p>
                    <Link to="/contact">
                      <Button className="deliveryhut-btn px-4 py-2" variant="">
                        Contact Us
                      </Button>
                    </Link>
                  </div>
                </Col>
              </Row>
            </Container>
          </Carousel.Item>

          <Carousel.Item className="carousel-three">
            <Container className="px-md-5">
              <Row>
                <Col sm={12} lg={6}>
                  <div className="">
                    <h5>With help from our fleet</h5>
                    <h1 className="banner-title mb-2">SEND IT ANYWHERE</h1>
                    <p className="mb-4">
                      Would you like to send a gift to a friend who lives in
                      another country? There's no need to worry, we'll do it for
                      you.
                    </p>
                    <Link to="/contact">
                      <Button className="deliveryhut-btn px-4 py-2" variant="">
                        Contact Us
                      </Button>
                    </Link>
                  </div>
                </Col>
                <Col sm={12} lg={6}></Col>
              </Row>
            </Container>
          </Carousel.Item>
        </Carousel>
      </Container>
    </>
  );
};

export default Banner;
