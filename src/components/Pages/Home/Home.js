import React from "react";
import useDocumentTitle from "../../../hooks/useDocumentTitle";
import Banner from "./Banner/Banner";
import "./Home.css";
import ServiceSection from "./ServiceSection/ServiceSection";

const Home = () => {
  useDocumentTitle("Deliveryhut - Professional delivery services", false);
  return (
    <div>
      {/* banner section  */}
      <Banner></Banner>
      {/* service section  */}
      <ServiceSection></ServiceSection>
    </div>
  );
};

export default Home;
