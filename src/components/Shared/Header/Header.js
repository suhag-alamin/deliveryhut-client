import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import "./Header.css";
import logo from "../../../images/logo.png";
import useAuth from "../../../hooks/useAuth";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignInAlt, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const { user, logOut } = useAuth();
  return (
    <>
      <Navbar sticky="top" bg="light" expand="lg" className="p-0 border-bottom">
        <Container>
          <Navbar.Brand as={Link} to="/">
            <img className="logo" src={logo} alt="" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto text-center ">
              <Nav.Link
                activeClassName="nav-selected"
                className="nav-link"
                as={NavLink}
                to="/home"
              >
                Home
              </Nav.Link>
              <Nav.Link
                activeClassName="nav-selected"
                className="nav-link"
                as={NavLink}
                to="/services"
              >
                Services
              </Nav.Link>
              {user?.email && (
                <Nav.Link
                  activeClassName="nav-selected"
                  className="nav-link"
                  as={NavLink}
                  to="/myOrders"
                >
                  My Orders
                </Nav.Link>
              )}
              {user?.email && (
                <Nav.Link
                  activeClassName="nav-selected"
                  className="nav-link"
                  as={NavLink}
                  to="/manageAllOrders"
                >
                  Manage All Orders
                </Nav.Link>
              )}
              {user?.email && (
                <Nav.Link
                  activeClassName="nav-selected"
                  className="nav-link"
                  as={NavLink}
                  to="/addService"
                >
                  Add Service
                </Nav.Link>
              )}

              <Nav.Link
                activeClassName="nav-selected"
                className="nav-link"
                as={NavLink}
                to="/about"
              >
                About
              </Nav.Link>
              <Nav.Link
                activeClassName="nav-selected"
                className="nav-link"
                as={NavLink}
                to="/contact"
              >
                Contact
              </Nav.Link>
              {!user?.email ? (
                <Nav.Link
                  activeClassName="nav-selected"
                  className="nav-link me-2"
                  as={NavLink}
                  to="/login"
                >
                  Login
                  <span className="ms-2">
                    <FontAwesomeIcon icon={faSignInAlt} />
                  </span>
                </Nav.Link>
              ) : (
                <Button
                  onClick={logOut}
                  className="deliveryhut-outline-btn px-3"
                  variant="text"
                >
                  Log Out
                  <span className="ms-2">
                    <FontAwesomeIcon icon={faSignOutAlt} />
                  </span>
                </Button>
              )}
            </Nav>
            {user?.photoURL && (
              <span className="ms-2">
                <img className="user-img" src={user.photoURL} alt="" />
              </span>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
