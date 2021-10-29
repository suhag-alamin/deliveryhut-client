import React from "react";
import { Container } from "react-bootstrap";
import { useForm } from "react-hook-form";
import useDocumentTitle from "../../../hooks/useDocumentTitle";
import OthersBanner from "../../Shared/OthersBanner/OthersBanner";
import "./AddService.css";

const AddService = () => {
  // dynamic title
  useDocumentTitle("Add a Service");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(errors);
  return (
    <>
      {/* banner */}
      <OthersBanner>
        <h2>Add a Service</h2>
      </OthersBanner>
      {/* add a service  */}
      <Container className="py-5">
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
