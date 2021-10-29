import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card, Col, Container, Row, Spinner } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useParams } from "react-router";
import useAuth from "../../../hooks/useAuth";
import useDocumentTitle from "../../../hooks/useDocumentTitle";
import OthersBanner from "../../Shared/OthersBanner/OthersBanner";
import "./OrderPlace.css";
import swal from "sweetalert";

const OrderPlace = () => {
  // dynamic title
  useDocumentTitle("Place Order");
  // params
  const { id } = useParams();
  // states
  const [service, setService] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const { user } = useAuth();

  // load data
  useEffect(() => {
    setIsLoading(true);
    fetch(`https://morning-sierra-84457.herokuapp.com/services/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setService(data);
        setIsLoading(false);
      });
  }, [id]);

  // data infomation
  const { title, subTitle, description, img, price } = service;

  // order form
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  // submit order
  const onSubmit = (data) => {
    data.status = "pending";
    axios
      .post("https://morning-sierra-84457.herokuapp.com/orders", data)
      .then((result) => {
        if (result?.data?.insertedId) {
          swal({
            title: "Successfully booked the service!",
            icon: "success",
          });
          reset();
        }
      });
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
      <OthersBanner>Place Order</OthersBanner>
      <Container className="py-5 px-4 my-4 bg-white shadow rounded-3">
        <h2 className="text-center fs-2 mb-4">
          Book your <span className="colored-text">Service</span>
        </h2>
        <Row className="g-4">
          <Col lg={6}>
            <div>
              <Card className="h-100 shadow-sm">
                <div className="overflow-hidden order-details-img">
                  <Card.Img className="img-fluid" variant="top" src={img} />
                </div>
                <Card.Body>
                  <h6 className="text-uppercase sub-title">{subTitle}</h6>
                  <Card.Title className="text-uppercase title">
                    {title}
                  </Card.Title>
                  <h4 style={{ color: "#006d77" }}>$ {price}</h4>
                  <Card.Text className="description">{description}</Card.Text>
                </Card.Body>
              </Card>
            </div>
          </Col>
          <Col lg={6} className="mt-5">
            <h4 className="mb-4">Booking Details</h4>
            <div className="order-form">
              <form onSubmit={handleSubmit(onSubmit)}>
                <input
                  type="text"
                  placeholder="Name"
                  value={user?.displayName}
                  {...register("userName", { required: true })}
                />
                {errors.userName && (
                  <span className="text-danger">User Name is required</span>
                )}
                <input
                  type="email"
                  placeholder="Email"
                  value={user?.email}
                  {...register("userEmail", { required: true })}
                />
                {errors.userEmail && (
                  <span className="text-danger">User Emails is required</span>
                )}
                <input
                  type="text"
                  placeholder="Service Name"
                  value={title}
                  {...register("serviceName", { required: true })}
                />
                {errors.serviceName && (
                  <span className="text-danger">Service Name is required</span>
                )}
                <input
                  type="number"
                  placeholder="Price"
                  value={price}
                  {...register("price", { required: true })}
                />
                {errors.price && (
                  <span className="text-danger">Price is required</span>
                )}
                <textarea
                  placeholder="Address"
                  {...register("address", { required: true })}
                />
                {errors.address && (
                  <span className="text-danger">Address is required</span>
                )}
                <input
                  type="text"
                  placeholder="City"
                  {...register("city", { required: true })}
                />
                {errors.city && (
                  <span className="text-danger">City is required</span>
                )}
                <input
                  type="date"
                  placeholder="date"
                  {...register("date", { required: true })}
                />
                {errors.date && (
                  <span className="text-danger">Date is required</span>
                )}

                <input
                  type="submit"
                  value="Book Now"
                  className="deliveryhut-btn"
                />
              </form>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default OrderPlace;
