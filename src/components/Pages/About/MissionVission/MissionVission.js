import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import mission from "../../../../images/mission.jpg";
import vission from "../../../../images/vission.jpg";

const MissionVission = () => {
  return (
    <>
      <Container className="py-5 px-3 bg-white">
        <Row className=" align-items-center">
          <Col lg={6}>
            <div className="text-center text-lg-start animate__animated animate__fadeInLeft">
              <img className="img-fluid" src={mission} alt="" />
            </div>
          </Col>
          <Col lg={6}>
            <div className="mt-3 mt-ld-0 text-center text-lg-start animate__animated animate__fadeInRight">
              <p>How do we operate?</p>
              <h3 style={{ color: "#006d77" }}>OUR MISSION</h3>
              <p className="text-muted">
                Our mission is to deliver a positive, reliable experience to
                each and every one of our clients while offering exceptional
                value in the marketplace and setting the standard for
                professionalism in the logistic solutions we provide. In
                addition to operating our business profitably, we strive to
                operate it responsibly both for our clients and our employees,
                for whom our goal is to provide a safe and secure work
                environment.
              </p>
            </div>
          </Col>
        </Row>
        <Row className="mt-5 align-items-center vission-row">
          <Col lg={6}>
            <div className="mt-3 mt-ld-0 text-center text-lg-start animate__animated animate__fadeInLeft animate__delay-1s">
              <p>How do we operate?</p>
              <h3 style={{ color: "#006d77" }}>OUR VISSION</h3>
              <p className="text-muted">
                Our aim is to act as an indispensable partner to our clients by
                helping them build and maximize sustainable competitive
                advantages. We do this by helping them get their products to
                market quickly, efficiently, and safely. In addition to our
                expertly crafted and reliably delivered logistics solutions, our
                clients can rest assured that every interaction will be driven
                by integrity and respect, the fundamental principles of our
                business.
              </p>
            </div>
          </Col>
          <Col lg={6} className="">
            <div className="text-center text-lg-end mt-3 mt-ld-0 animate__animated animate__fadeInRight animate__delay-1s">
              <img className="img-fluid" src={vission} alt="" />
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default MissionVission;
