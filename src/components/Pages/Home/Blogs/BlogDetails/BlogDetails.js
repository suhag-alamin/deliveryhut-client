import React, { useEffect, useState } from "react";
import { Card, Col, Container, Row, Spinner } from "react-bootstrap";
import { useParams } from "react-router";

const BlogDetails = () => {
  const [blog, setBlog] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();
  useEffect(() => {
    setIsLoading(true);
    fetch(`https://morning-sierra-84457.herokuapp.com/blogs/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setBlog(data);
        setIsLoading(false);
      });
  }, [id]);

  if (isLoading) {
    return (
      <div className="text-center py-4">
        <Spinner animation="border" variant="" style={{ color: "#006d77" }} />
      </div>
    );
  }

  const { title, description, img } = blog;
  return (
    <>
      <Container className="py-5">
        <Row>
          <Col>
            <Card
              style={{ backgroundColor: "rgba(237, 246, 249, 0.7)" }}
              className="h-100 shadow p-3"
            >
              <div className="overflow-hidden text-center mb-3">
                <Card.Img className="img-fluid" variant="top" src={img} />
              </div>
              <Card.Body>
                <Card.Title className="fs-2 colored-text">{title}</Card.Title>
                <Card.Text className="text-muted my-4">{description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default BlogDetails;
