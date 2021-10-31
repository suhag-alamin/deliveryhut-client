import axios from "axios";
import React from "react";
import { Container } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router";
import swal from "sweetalert";
import useDocumentTitle from "../../../hooks/useDocumentTitle";
import OthersBanner from "../../Shared/OthersBanner/OthersBanner";
import "./AddService.css";

const AddService = () => {
  // dynamic title
  useDocumentTitle("Add a Service");

  // redirect  route
  const history = useHistory();
  const redirectUrl = "/services";

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    axios
      .post("https://morning-sierra-84457.herokuapp.com/services", data)
      .then((result) => {
        console.log(result);
        if (result?.data?.insertedId) {
          swal({
            title: "Successfully add a service",
            icon: "success",
          });
          reset();
          history.push(redirectUrl);
        }
      });
  };
  return (
    <>
      {/* banner */}
      <OthersBanner>Add a Service</OthersBanner>
      {/* add a service  */}
      <Container className="py-5 animate__animated animate__fadeInDownBig">
        <h2 className="text-center fs-1">
          Add a <span className="colored-text">Service</span>
        </h2>
        <div className="add-service-form shadow-lg mt-4">
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              type="text"
              placeholder="Title"
              {...register("title", { required: true })}
            />
            {errors.title && (
              <span className="text-danger">Title is required</span>
            )}
            <input
              type="text"
              placeholder="Sub title"
              {...register("subTitle", {})}
            />
            <textarea
              placeholder="Description"
              {...register("description", { required: true })}
            />
            {errors.description && (
              <span className="text-danger">Description is required</span>
            )}
            <input
              type="number"
              placeholder="Price"
              {...register("price", { required: true })}
            />
            {errors.price && (
              <span className="text-danger">Price is required</span>
            )}
            <input
              title="Please upload the image in Imgbb or anywhere you want, then submit the live link."
              type="url"
              placeholder="Image url / link"
              {...register("img", { required: true })}
            />
            {errors.img && (
              <span className="text-danger">Image link / URL is required</span>
            )}

            <input
              type="submit"
              value="Add Service"
              className="deliveryhut-btn"
            />
          </form>
        </div>
      </Container>
    </>
  );
};

export default AddService;
