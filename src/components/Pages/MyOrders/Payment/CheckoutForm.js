import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Spinner } from "react-bootstrap";
import swal from "sweetalert";
import "./CheckoutForm.css";

const CheckoutForm = ({ order }) => {
  const { _id, price, userName, userEmail } = order;
  const stripe = useStripe();
  const elements = useElements();

  const [clientSecret, setClientSecret] = useState("");
  const [processing, setProcessing] = useState(false);
  const [success, setSuccess] = useState("");

  useEffect(() => {
    axios
      .post(
        "https://morning-sierra-84457.herokuapp.com/create-payment-intent",
        {
          price,
        }
      )
      .then((result) => {
        setClientSecret(result.data?.clientSecret);
      });
  }, [price]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) {
      setProcessing(false);
      return;
    }

    const card = elements.getElement(CardElement);
    if (card === null) {
      setProcessing(false);
      return;
    }
    setProcessing(true);
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });
    if (error) {
      setProcessing(false);
      swal({
        title: error.message,
        icon: "error",
      });
    } else {
      console.log(paymentMethod);
    }

    // payment intent
    const { paymentIntent, error: intentError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: userName,
            email: userEmail,
          },
        },
      });

    if (intentError) {
      swal({
        title: intentError.message,
        icon: "error",
      });
      setProcessing(false);
    } else {
      setSuccess("Your payment processed successfully");
      swal({
        title: "Your payment processed successfully",
        icon: "success",
      });
      console.log(paymentIntent);
      setProcessing(false);

      // save to database
      const payment = {
        amount: paymentIntent.amount,
        created: paymentIntent.created,
        last4: paymentMethod.card.last4,
        transaction: paymentIntent.id,
      };

      axios
        .put(
          `https://morning-sierra-84457.herokuapp.com/orders/${_id}`,
          payment
        )
        .then((result) => {
          console.log(result);
        });
    }
  };

  return (
    <div>
      <form className="checkout-form" onSubmit={handleSubmit}>
        <CardElement
          className="card-element"
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#fff",
                "::placeholder": {
                  color: "#fff",
                },
              },
              invalid: {
                color: "#f7f7f7",
              },
            },
          }}
        />
        {processing ? (
          <div className="text-center py-1">
            <Spinner animation="border" variant="" style={{ color: "#fff" }} />
          </div>
        ) : (
          <Button
            variant="outline-light"
            type="submit"
            disabled={!stripe || success}
          >
            Pay $ {price}
          </Button>
        )}
      </form>
    </div>
  );
};

export default CheckoutForm;
