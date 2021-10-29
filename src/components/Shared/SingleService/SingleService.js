import React from "react";
import { Button, Card } from "react-bootstrap";

const SingleService = ({ service }) => {
  const { title, subTitle, description, img } = service;
  return (
    <>
      <Card className="h-100 shadow">
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <h6 className="text-uppercase">{subTitle}</h6>
          <Card.Title className="text-uppercase">{title}</Card.Title>
          <Card.Text>{description.slice(0, 100)}...</Card.Text>
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
