import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router";
import OthersBanner from "../../../Shared/OthersBanner/OthersBanner";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(
  "pk_test_51Jvw1LGITY56CrX5VJRHNFpXy4tLNzFhkN82MDTtAmbCqy2wMlk7IfoxiDMyckwgqIZkI8B7MVzObX86W2qnMdaF00GELkrPsc"
);

const Payment = () => {
  const { id } = useParams();
  const [order, setOrder] = useState({});
  useEffect(() => {
    axios
      .get(`https://deliveryhut.onrender.com/orders/${id}`)
      .then((result) => {
        setOrder(result.data);
      });
  }, [id]);
  return (
    <>
      <OthersBanner>Make Payment</OthersBanner>
      <Container className="py-5 colored-bg text-white rounded-3 shadow my-4">
        <h2 className="text-center fs-2 mb-5 text-uppercase">
          Please pay for{" "}
          <span style={{ color: "#ffddd2" }}>{order?.serviceName}</span>
        </h2>

        {order?.price && (
          <Elements stripe={stripePromise}>
            <CheckoutForm order={order} />
          </Elements>
        )}
      </Container>
    </>
  );
};

export default Payment;
