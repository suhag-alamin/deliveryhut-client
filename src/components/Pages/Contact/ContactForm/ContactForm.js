import React from "react";
import { Container } from "react-bootstrap";
import { useForm } from "react-hook-form";

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(errors);
  return (
    <>
      <Container className="pb-5">
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
