import React from "react";
import useDocumentTitle from "../../../hooks/useDocumentTitle";
import Banner from "./Banner/Banner";
import Blogs from "./Blogs/Blogs";
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
      {/* blog section  */}
      <Blogs></Blogs>
    </div>
  );
};

export default Home;
