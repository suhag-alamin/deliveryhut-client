import React, { useEffect, useState } from "react";
import { Col, Container, Row, Spinner } from "react-bootstrap";
import useDocumentTitle from "../../../hooks/useDocumentTitle";
import OthersBanner from "../../Shared/OthersBanner/OthersBanner";
import SingleService from "../../Shared/SingleService/SingleService";
import "./AllServices.css";

const AllServices = () => {
  // dynamic title
  useDocumentTitle("Services");

  const [services, setServices] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setIsLoading(true);
    fetch("https://morning-sierra-84457.herokuapp.com/services")
      .then((res) => res.json())
      .then((data) => {
        setServices(data);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return (
      <div className="text-center py-4">
        <Spinner animation="border" variant="" style={{ color: "#006d77" }} />
      </div>
    );
  }
  return (
    <div>
      {/* banner  */}
      <OthersBanner>Services</OthersBanner>
      {/* serivce  */}
      <Container className="py-5">
        <h2 className="text-center fs-2">
          Our <span className="colored-text">Services</span>
        </h2>
        <Row xs={1} md={2} lg={3} className="g-4 mt-3">
          {services.map((service) => (
            <Col key={service._id}>
              <SingleService service={service}></SingleService>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default AllServices;
