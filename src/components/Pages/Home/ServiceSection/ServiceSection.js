import React, { useEffect, useState } from "react";
import { Button, Col, Container, Row, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";
import SingleService from "../../../Shared/SingleService/SingleService";

const ServiceSection = () => {
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
    <>
      <Container className="py-5">
        <h2 className="text-center fs-1">
          Main <span className="colored-text">Offerings</span>
        </h2>
        <Row xs={1} md={2} lg={3} className="g-4 mt-3">
          {services.slice(0, 6).map((service) => (
            <Col key={service._id}>
              <SingleService service={service}></SingleService>
            </Col>
          ))}
        </Row>
        <div className="text-center mt-4">
          <Link to="/services">
            <Button className="deliveryhut-outline-btn" variant="">
              View All Services
            </Button>
          </Link>
        </div>
      </Container>
    </>
  );
};

export default ServiceSection;
