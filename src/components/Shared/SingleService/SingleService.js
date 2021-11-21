import { faArrowAltCircleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router";
import "./SingleService.css";

const SingleService = ({ service }) => {
  const { _id, title, subTitle, description, img } = service;
  // handleClick
  const navigate = useNavigate();
  const handleClick = (id) => {
    navigate(`/orderPlace/${id}`);
  };
  return (
    <>
      <Card className="h-100 shadow animate__animated animate__slideInUp animate__delay-1s">
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
          <Button
            onClick={() => handleClick(_id)}
            className="deliveryhut-btn booking-btn animate__animated animate__backInUp animate__delay-2s"
            variant=""
          >
            Book Now
            <span className="ms-2 book-icon">
              <FontAwesomeIcon icon={faArrowAltCircleRight} />
            </span>
          </Button>
        </Card.Footer>
      </Card>
    </>
  );
};

export default SingleService;
