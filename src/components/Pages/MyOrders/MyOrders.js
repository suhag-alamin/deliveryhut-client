import React from "react";
import useDocumentTitle from "../../../hooks/useDocumentTitle";
import "./MyOrder.css";

const MyOrders = () => {
  useDocumentTitle("My Orders");
  return (
    <div>
      <h3>this is my orders</h3>
    </div>
  );
};

export default MyOrders;
