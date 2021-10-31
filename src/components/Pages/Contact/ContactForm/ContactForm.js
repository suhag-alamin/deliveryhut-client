import axios from "axios";
import React from "react";
import { Container } from "react-bootstrap";
import { useForm } from "react-hook-form";
import swal from "sweetalert";

const ContactForm = () => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    axios
      .post("https://morning-sierra-84457.herokuapp.com/message", data)
      .then((result) => {
        if (result.data?.insertedId) {
          swal({
            text: "We got your Message. We will got back to you soon.",
            icon: "success",
          });
          reset();
        }
      });
  };
  return (
    <>
      <Container className="pb-5 animate__animated animate__fadeInDownBig animate__delay-1s">
        <h2 className="text-center fs-1">
          Send us a <span className="colored-text">Message</span>
        </h2>
        <div className="add-service-form shadow-lg mt-4">
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              type="text"
              placeholder="Name"
              {...register("name", { required: true, maxLength: 80 })}
            />
            {errors.name && (
              <span className="text-danger">Name is required</span>
            )}
            <input
              type="text"
              placeholder="Email"
              {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
            />
            {errors.email && (
              <span className="text-danger">Email is required</span>
            )}
            <input
              type="tel"
              placeholder="Phone Number"
              {...register("mobileNumber", { required: true, maxLength: 12 })}
            />
            {errors.mobileNumber && (
              <span className="text-danger">Mobile Number is required</span>
            )}
            <input
              type="text"
              placeholder="Subject"
              {...register("subject", {})}
            />

            <textarea
              placeholder="Message"
              {...register("message", { required: true })}
            />

            {errors.message && (
              <span className="text-danger">Please type your message</span>
            )}

            <input type="submit" value="Send" className="deliveryhut-btn" />
          </form>
        </div>
      </Container>
    </>
  );
};

export default ContactForm;
