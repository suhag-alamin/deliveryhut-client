import React from "react";
import useDocumentTitle from "../../../hooks/useDocumentTitle";
import Banner from "./Banner/Banner";
import Blogs from "./Blogs/Blogs";
import FeatureContact from "./FeatureContact/FeatureContact";
import "./Home.css";
import ServiceSection from "./ServiceSection/ServiceSection";
import Testimonials from "./Testimonials/Testimonials";

const Home = () => {
  useDocumentTitle("Deliveryhut - Professional delivery services", false);
  return (
    <div>
      {/* banner section  */}
      <Banner></Banner>
      {/* feature contact section  */}
      <FeatureContact></FeatureContact>
      {/* service section  */}
      <ServiceSection></ServiceSection>
      {/* testimonials section  */}
      <Testimonials></Testimonials>
      {/* blog section  */}
      <Blogs></Blogs>
    </div>
  );
};

export default Home;
