import React from "react";
import { Button, Card } from "react-bootstrap";
import "./SingleService.css";

const SingleService = ({ service }) => {
  const { title, subTitle, description, img } = service;
  return (
    <>
      <Card className="h-100 shadow">
        <div className="overflow-hidden service-img">
          <Card.Img className="img-fluid" variant="top" src={img} />
        </div>
        <Card.Body>
          <h6 className="text-uppercase sub-title">{subTitle}</h6>
          <Card.Title className="text-uppercase title">{title}</Card.Title>
          <Card.Text className="description">
            {description.slice(0, 100)}...
          </Card.Text>
        </Card.Body>
        <Card.Footer className="bg-white border-0 text-center pb-3">
          <Button className="deliveryhut-btn" variant="">
            Book Now
          </Button>
        </Card.Footer>
      </Card>
    </>
  );
};

export default SingleService;
