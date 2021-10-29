import axios from "axios";
import React, { useEffect, useState } from "react";
import { Col, Container, Row, Spinner } from "react-bootstrap";
import swal from "sweetalert";
import useAuth from "../../../hooks/useAuth";
import useDocumentTitle from "../../../hooks/useDocumentTitle";
import OthersBanner from "../../Shared/OthersBanner/OthersBanner";
import "./MyOrder.css";
import SingleOrder from "./SingleOrder/SingleOrder";

const MyOrders = () => {
  // dynamic title
  useDocumentTitle("My Orders");

  // states
  const [orders, setOrders] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const { user } = useAuth();
  const email = user?.email;
  const emails = { email };
  const values = Object.values(emails);

  useEffect(() => {
    setIsLoading(true);
    axios
      .post("https://morning-sierra-84457.herokuapp.com/orders/byEmail", values)
      .then((orders) => {
        setOrders(orders.data);
        setIsLoading(false);
      });
  }, []);

  const hanldeDelete = (id) => {
    const proceed = window.confirm("Are you sure want to cancel?");
    if (proceed) {
      axios
        .delete(`https://morning-sierra-84457.herokuapp.com/orders/${id}`)
        .then((result) => {
          if (result.data.deletedCount > 0) {
            const remaining = orders.filter((event) => event._id !== id);
            setOrders(remaining);
            swal({
              title: "Booking Canceled",
              icon: "success",
            });
          }
        });
    }
  };

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
      <OthersBanner>Orders</OthersBanner>
      <Container className="py-5 px-4 colored-bg text-white rounded-3 shadow my-4">
        <h2 className="text-center fs-2 mb-5">
          My <span style={{ color: "#ffddd2" }}>Orders</span>
        </h2>
        <Row className="g-4">
          {orders.map((order) => (
            <Col lg={6} key={order._id}>
              <SingleOrder
                order={order}
                hanldeDelete={hanldeDelete}
              ></SingleOrder>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default MyOrders;
