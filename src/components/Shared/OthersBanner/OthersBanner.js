import React from "react";
import { Container } from "react-bootstrap";
import "./OthersBanner.css";

const OthersBanner = ({ children }) => {
  return (
    <>
      <Container fluid className="others-banner">
        <Container>
          <h2 className="text-white text-center fs-1">{children}</h2>
        </Container>
      </Container>
    </>
  );
};

export default OthersBanner;
