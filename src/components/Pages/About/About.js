import React from "react";
import useDocumentTitle from "../../../hooks/useDocumentTitle";
import "./About.css";

const About = () => {
  useDocumentTitle("About");
  return (
    <div>
      <h3>this is about</h3>
    </div>
  );
};

export default About;
