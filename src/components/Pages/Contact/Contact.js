import React from "react";
import useDocumentTitle from "../../../hooks/useDocumentTitle";
import OthersBanner from "../../Shared/OthersBanner/OthersBanner";
import "./Contact.css";
import ContactDetails from "./ContactDetails/ContactDetails";
import ContactForm from "./ContactForm/ContactForm";

const Contact = () => {
  // dynamic title
  useDocumentTitle("Contact");
  return (
    <>
      {/* banner  */}
      <OthersBanner>Contact Us</OthersBanner>
      {/* contact detials  */}
      <ContactDetails></ContactDetails>
      {/* contact form  */}
      <ContactForm></ContactForm>
    </>
  );
};

export default Contact;
