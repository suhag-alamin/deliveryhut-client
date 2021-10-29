import React from "react";
import useDocumentTitle from "../../../hooks/useDocumentTitle";
import "./AllServices.css";

const AllServices = () => {
  useDocumentTitle("Services");
  return (
    <div>
      <h3>this is all services</h3>
    </div>
  );
};

export default AllServices;
