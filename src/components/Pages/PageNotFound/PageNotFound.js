import React from "react";
import { Button, Container } from "react-bootstrap";
import { useNavigate } from "react-router";
import useDocumentTitle from "../../../hooks/useDocumentTitle";
import error from "../../../images/404-error-page-not-found.gif";

const PageNotFound = () => {
  useDocumentTitle("Page Not Found");
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/");
  };
  return (
    <>
      <Container className="py-5">
        <div className="text-center">
          <img src={error} alt="" />
        </div>
        <div className="text-center">
          <Button
            onClick={handleClick}
            className="deliveryhut-btn px-4 py-2 rounded-3 mt-4"
            variant=""
          >
            Go Back to Home
          </Button>
        </div>
      </Container>
    </>
  );
};

export default PageNotFound;
