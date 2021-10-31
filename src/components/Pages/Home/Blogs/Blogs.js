import React, { useEffect, useState } from "react";
import { Col, Container, Row, Spinner } from "react-bootstrap";
import SingleBlog from "./SingleBlog/SingleBlog";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setIsLoading(true);
    fetch("https://morning-sierra-84457.herokuapp.com/blogs")
      .then((res) => res.json())
      .then((data) => {
        setBlogs(data);
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
      <Container className="py-5 animate__animated animate__slideInUp animate__delay-2s">
        <h2 className="text-center fs-1">
          Lates <span className="colored-text">Blogs</span>
        </h2>
        <Row xs={1} md={2} lg={3} className="g-4 mt-3">
          {blogs.map((blog) => (
            <Col key={blog._id}>
              <SingleBlog blog={blog}></SingleBlog>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default Blogs;
