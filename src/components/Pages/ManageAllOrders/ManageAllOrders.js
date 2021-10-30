import React, { useEffect, useState } from "react";
import { Col, Container, Row, Spinner } from "react-bootstrap";
import useDocumentTitle from "../../../hooks/useDocumentTitle";
import OthersBanner from "../../Shared/OthersBanner/OthersBanner";
import "./ManageAllOrders.css";
import ManageSingleOrder from "./ManageSingleOrder/ManageSingleOrder";

const ManageAllOrders = () => {
  // dynamic title
  useDocumentTitle("Manage All Orders");
  // states
  const [orders, setOrders] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);

    fetch("https://morning-sierra-84457.herokuapp.com/orders")
      .then((res) => res.json())
      .then((data) => {
        setOrders(data);
        setIsLoading(false);
      });
  }, []);

  // spinner
  if (isLoading) {
    return (
      <div className="text-center py-4">
        <Spinner animation="border" variant="" style={{ color: "#006d77" }} />
      </div>
    );
  }
  return (
    <>
      {/* banner  */}
      <OthersBanner>Manage All Orders</OthersBanner>
      <Container className="py-5 px-3 px-sm-5 colored-bg text-white rounded-3 shadow my-4">
        <h2 className="text-center fs-2 mb-5">
          All <span style={{ color: "#ffddd2" }}>Orders</span>
        </h2>
        <Row className="g-4">
          {orders.map((order) => (
            <Col md={12} key={order._id}>
              <ManageSingleOrder order={order}></ManageSingleOrder>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default ManageAllOrders;
