import axios from "axios";
import React, { useEffect, useState } from "react";
import useAuth from "../../../hooks/useAuth";
import useDocumentTitle from "../../../hooks/useDocumentTitle";
import "./MyOrder.css";

const MyOrders = () => {
  // dynamic title
  useDocumentTitle("My Orders");

  // states
  const [orders, setOrders] = useState([]);
  const { user } = useAuth();
  const email = user?.email;
  const emails = { email };
  const values = Object.values(emails);
  console.log(values);

  useEffect(() => {
    axios
      .post("https://morning-sierra-84457.herokuapp.com/orders/byEmail", values)
      .then((orders) => {
        setOrders(orders.data);
        console.log(orders);
      });
  }, []);

  return (
    <div>
      <h3>this is my orders : {orders?.length}</h3>
    </div>
  );
};

export default MyOrders;
