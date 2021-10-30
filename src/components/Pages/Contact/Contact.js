import React from "react";
import { Container } from "react-bootstrap";
import useDocumentTitle from "../../../hooks/useDocumentTitle";
import OthersBanner from "../../Shared/OthersBanner/OthersBanner";
import "./Contact.css";
import ContactDetails from "./ContactDetails/ContactDetails";

const Contact = () => {
  // dynamic title
  useDocumentTitle("Contact");
  return (
    <>
      {/* banner  */}
      <OthersBanner>Contact Us</OthersBanner>
      {/* contact detials  */}
      <ContactDetails></ContactDetails>
    </>
  );
};

export default Contact;
