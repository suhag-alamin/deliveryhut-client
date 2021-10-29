import React from "react";
import useDocumentTitle from "../../../hooks/useDocumentTitle";
import Banner from "./Banner/Banner";
import "./Home.css";

const Home = () => {
  useDocumentTitle("Deliveryhut - Professional delivery services", false);
  return (
    <div>
      {/* banner section  */}
      <Banner></Banner>
    </div>
  );
};

export default Home;
