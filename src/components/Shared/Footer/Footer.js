import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faGithub,
  faTwitter,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import {
  faLocationArrow,
  faPhoneAlt,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

import logo from "../../../images/logo-2.png";
import { Link } from "react-router-dom";

const Footer = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch("https://morning-sierra-84457.herokuapp.com/blogs")
      .then((res) => res.json())
      .then((data) => {
        setBlogs(data);
      });
  }, []);
  return (
    <Container fluid className="footer-section pt-5">
      <Container>
        <Row className="g-4">
          <Col lg={4}>
            <div>
              <img className="w-50" src={logo} alt="" />
            </div>
            <div className="mt-4 border-top py-3">
              <div className="d-flex gap-3 text-white fs-5 footer-contact">
                <span>
                  <FontAwesomeIcon icon={faPhoneAlt} />
                </span>
                <p>+880 1791490304</p>
              </div>
              <div className="d-flex gap-3 text-white fs-5 footer-contact">
                <span>
                  <FontAwesomeIcon icon={faEnvelope} />
                </span>
                <p>info@deliveryhut.com</p>
              </div>
              <div className="d-flex gap-3 text-white fs-5 footer-contact">
                <span>
                  <FontAwesomeIcon icon={faLocationArrow} />
                </span>
                <p>
                  Sakhipur, Tangail <br /> Dhaka, Bangladesh
                </p>
              </div>
            </div>
          </Col>
          <Col lg={4}>
            <div>
              <h3 className="" style={{ color: "#edf6f9" }}>
                Recent Posts
              </h3>
              <div className="my-3 border-top pt-3 text-white">
                <ul>
                  {blogs.slice(0, 3).map((blog) => (
                    <li className="mb-4" key={blog._id}>
                      <div className="d-flex gap-3">
                        <div>
                          <img
                            style={{ width: "80px" }}
                            src={blog?.img}
                            alt=""
                          />
                        </div>
                        <div>
                          <Link
                            to={`/blog/${blog._id}`}
                            className="text-decoration-none text-white"
                          >
                            {" "}
                            {blog?.title}
                          </Link>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Col>
          <Col lg={4}>
            <div>
              <h3 className="" style={{ color: "#edf6f9" }}>
                Social Links
              </h3>
              <div className="border-top pt-3 mt-3">
                <a
                  className="social-links"
                  href="https://www.facebook.com/suhag.alamin.315/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FontAwesomeIcon icon={faFacebookF} />
                </a>
                <a
                  className="social-links"
                  href="https://github.com/developer-suhag"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FontAwesomeIcon icon={faGithub} />
                </a>
                <a
                  className="social-links"
                  href="https://twitter.com/suhag_alamain"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
                <a
                  className="social-links"
                  href="https://www.linkedin.com/in/suhag-al-amin/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FontAwesomeIcon icon={faLinkedinIn} />
                </a>
              </div>
            </div>
          </Col>
        </Row>
        <Row className="border-top py-2 mt-3">
          <p style={{ color: " #edf6f9" }} className="text-center">
            &copy;2021 - All right reserved || Design & Developed by Suhag
          </p>
        </Row>
      </Container>
    </Container>
  );
};

export default Footer;
