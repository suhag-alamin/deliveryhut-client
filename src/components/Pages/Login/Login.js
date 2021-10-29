import React from "react";
import { Button, Container } from "react-bootstrap";
import useDocumentTitle from "../../../hooks/useDocumentTitle";
import "./Login.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle, faGithub } from "@fortawesome/free-brands-svg-icons";

const Login = () => {
  useDocumentTitle("Login");
  return (
    <>
      <Container className="py-5">
        <div className="shadow-lg p-5 w-50 mx-auto login-section">
          <h3 className="text-center fs-2 mb-2">Please Login</h3>
          <div className="social-login mt-3 text-center">
            <div>
              <Button className="deliveryhut-btn m-2" variant="">
                <span className="me-2">
                  <FontAwesomeIcon icon={faGoogle} />
                </span>
                LogIn with Google
              </Button>
            </div>
            <div>
              <Button className="deliveryhut-btn m-2" variant="">
                <span className="me-2">
                  <FontAwesomeIcon icon={faGithub} />
                </span>
                LogIn with Github
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Login;
