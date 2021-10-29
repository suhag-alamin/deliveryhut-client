import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons";
const SingleBlog = ({ blog }) => {
  const { _id, title, description, img } = blog;
  return (
    <>
      <Card className="h-100 shadow">
        <div className="overflow-hidden service-img">
          <Card.Img className="img-fluid " variant="top" src={img} />
        </div>
        <Card.Body>
          <Card.Title className="fs-5">{title.slice(0, 35)}...</Card.Title>
          <Card.Text className="description">
            {description.slice(0, 100)}...
          </Card.Text>
        </Card.Body>
        <Card.Footer className="bg-white border-0 text-center pb-3">
          <Link
            to={`/blog/${_id}`}
            style={{ color: "#006d77" }}
            className="text-decoration-none"
          >
            Read More
            <span className="ms-2">
              <FontAwesomeIcon icon={faAngleDoubleRight} />
            </span>
          </Link>
        </Card.Footer>
      </Card>
    </>
  );
};

export default SingleBlog;
