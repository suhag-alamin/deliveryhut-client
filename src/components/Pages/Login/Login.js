import React from "react";
import { Button, Container } from "react-bootstrap";
import useDocumentTitle from "../../../hooks/useDocumentTitle";
import "./Login.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle, faGithub } from "@fortawesome/free-brands-svg-icons";
import swal from "sweetalert";
import useAuth from "../../../hooks/useAuth";
import { useHistory, useLocation } from "react-router";

const Login = () => {
  // dynamic title
  useDocumentTitle("Login");

  // auth context
  const { signInUsingGoogle, signInUsingGithub, setIsLoading } = useAuth();

  // redirect private route
  const history = useHistory();
  const location = useLocation();
  const redirectUrl = location.state?.from || "/";

  // google redirect
  const hanldeGoogleLogin = () => {
    signInUsingGoogle()
      .then((result) => {
        history.push(redirectUrl);
        swal({
          title: "Successfully Sign In!!",
          icon: "success",
        });
      })
      .catch((error) => {
        swal({
          text: error.message,
          icon: "error",
        });
      })
      .finally(() => setIsLoading(false));
  };
  // github redirect
  const handleGithubLogin = () => {
    signInUsingGithub()
      .then((result) => {
        history.push(redirectUrl);
        swal({
          title: "Successfully Sign In!!",
          icon: "success",
        });
      })
      .catch((error) => {
        swal({
          text: error.message,
          icon: "error",
        });
      })
      .finally(() => setIsLoading(false));
  };

  return (
    <>
      <Container className="py-5">
        <div className="shadow-lg p-5 w-50 mx-auto login-section">
          <h3 className="text-center fs-2 mb-2">Please Login</h3>
          <div className="social-login mt-3 text-center">
            <div>
              <Button
                onClick={hanldeGoogleLogin}
                className="deliveryhut-btn m-2"
                variant=""
              >
                <span className="me-2">
                  <FontAwesomeIcon icon={faGoogle} />
                </span>
                LogIn with Google
              </Button>
            </div>
            <div>
              <Button
                onClick={handleGithubLogin}
                className="deliveryhut-btn m-2"
                variant=""
              >
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
