import React from "react";
import useDocumentTitle from "../../../hooks/useDocumentTitle";
import "./OrderPlace.css";

const OrderPlace = () => {
  useDocumentTitle("Place Order");
  return (
    <div>
      <h3>this is order place</h3>
    </div>
  );
};

export default OrderPlace;
