import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Testimonials.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";

import sign1 from "../../../../images/sign_1.png";
import sign2 from "../../../../images/sign_2.png";

const Testimonials = () => {
  return (
    <>
      <Container fluid className="colored-bg py-5">
        <Container>
          <h2 className="text-center fs-1 text-white">
            Client <span style={{ color: "#ffddd2" }}>Testimonials</span>
          </h2>
          <Row className="mt-4">
            <Col lg={1}></Col>
            <Col lg={5}>
              <div className="text-white d-flex gap-4 testimonial-box">
                <div>
                  <FontAwesomeIcon
                    className="fs-1 quote-icon"
                    icon={faQuoteLeft}
                  />
                </div>
                <div>
                  <div>
                    <p>
                      I owe my success to having listened respectfully to the
                      very best advice, and then going away and doing the exact
                      opposite.
                    </p>
                  </div>
                  <div className="text-end">
                    <img src={sign1} alt="" />
                    <h5>JOHN SMITH</h5>
                    <h6>CTO of KLM</h6>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={5}>
              <div className="text-white d-flex gap-4 testimonial-box">
                <div>
                  <FontAwesomeIcon
                    className="fs-1 quote-icon"
                    icon={faQuoteLeft}
                  />
                </div>
                <div>
                  <div>
                    <p>
                      Successful people do what unsuccessful people are not
                      willing to do. Don’t wish it were easier; wish you were
                      better.
                    </p>
                  </div>
                  <div className="text-end">
                    <img src={sign2} alt="" />
                    <h5>PATRICK HEAD</h5>
                    <h6>ReConstruction LLC</h6>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={1}></Col>
          </Row>
        </Container>
      </Container>
    </>
  );
};

export default Testimonials;
