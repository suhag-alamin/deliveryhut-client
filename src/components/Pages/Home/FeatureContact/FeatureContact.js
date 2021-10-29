import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./FeatureContact.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhoneVolume,
  faClock,
  faMapMarker,
} from "@fortawesome/free-solid-svg-icons";

const FeatureContact = () => {
  return (
    <>
      <Container fluid className="colored-bg py-5">
        <Container>
          <Row className="justify-content-center">
            <Col md={4} lg={4}>
              <div className="d-flex gap-3 text-white feature-box">
                <div>
                  <span className="feature-icon">
                    <FontAwesomeIcon className="fs-2" icon={faPhoneVolume} />
                  </span>
                </div>
                <div>
                  <h4>CALL CENTER</h4>
                  <p>
                    Give us a free call <br /> +880 1791490304
                  </p>
                </div>
              </div>
            </Col>
            <Col md={4} lg={4}>
              <div className="d-flex gap-3 text-white feature-box">
                <div>
                  <span className="feature-icon">
                    <FontAwesomeIcon className="fs-2" icon={faClock} />
                  </span>
                </div>
                <div>
                  <h4>WORKING HOURS</h4>
                  <p>
                    Mon-Sat 7AM-5PM <br /> Sat 9AM-3PM
                  </p>
                </div>
              </div>
            </Col>
            <Col md={4} lg={4}>
              <div className="d-flex gap-3 text-white feature-box-last">
                <div>
                  <span className="feature-icon">
                    <FontAwesomeIcon className="fs-2" icon={faMapMarker} />
                  </span>
                </div>
                <div>
                  <h4>OUR LOCATION</h4>
                  <p>
                    Sakhipur, Tangail <br /> Dhaka, Bangladesh
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  );
};

export default FeatureContact;
