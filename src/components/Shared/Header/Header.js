import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import "./Header.css";
import logo from "../../../images/logo.png";

const Header = () => {
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
              <Nav.Link
                activeClassName="nav-selected"
                className="nav-link"
                as={NavLink}
                to="/myOrders"
              >
                My Orders
              </Nav.Link>
              <Nav.Link
                activeClassName="nav-selected"
                className="nav-link"
                as={NavLink}
                to="/manageAllOrders"
              >
                Manage All Orders
              </Nav.Link>
              <Nav.Link
                activeClassName="nav-selected"
                className="nav-link"
                as={NavLink}
                to="/addService"
              >
                Add Service
              </Nav.Link>

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
              <Nav.Link
                activeClassName="nav-selected"
                className="nav-link"
                as={NavLink}
                to="/login"
              >
                Login
              </Nav.Link>
              <Button className="deliveryhut-outline-btn px-3" variant="text">
                Log Out
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
