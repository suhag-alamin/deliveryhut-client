import React from "react";
import { Container } from "react-bootstrap";
import useDocumentTitle from "../../../hooks/useDocumentTitle";
import OthersBanner from "../../Shared/OthersBanner/OthersBanner";
import "./About.css";
import AboutCompany from "./AboutCompany/AboutCompany";
import MissionVission from "./MissionVission/MissionVission";

const About = () => {
  // dynamic title
  useDocumentTitle("About");

  return (
    <>
      {/* banner  */}
      <OthersBanner>About Us</OthersBanner>
      {/* mission vission  */}
      <MissionVission></MissionVission>
      {/* about company  */}
      <AboutCompany></AboutCompany>
    </>
  );
};

export default About;
