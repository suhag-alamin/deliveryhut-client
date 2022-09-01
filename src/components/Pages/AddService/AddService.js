import axios from "axios";
import React from "react";
import { Container, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import swal from "sweetalert";
import useDocumentTitle from "../../../hooks/useDocumentTitle";
import OthersBanner from "../../Shared/OthersBanner/OthersBanner";
import "./AddService.css";

const AddService = () => {
  // dynamic title
  useDocumentTitle("Add a Service");

  // redirect  route
  const navigate = useNavigate();
  const redirectUrl = "/services";

  const formData = new FormData();

  const url = "https://api.cloudinary.com/v1_1/dkw1ovah4/image/upload";

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    data.img = data.img[0];

    formData.append("title", data.title);
    formData.append("subTitle", data.subTitle);
    formData.append("price", data.price);
    formData.append("description", data.description);
    formData.append("file", data.img);
    formData.append("upload_preset", "llqbnsmr");

    const uploadImage = async () => {
      const pic = await axios.post(url, formData);
      uploadToDb(pic.data.url);
    };
    uploadImage();

    const uploadToDb = (img) => {
      data.img = img;
      data.price = parseFloat(data.price);
      axios
        .post("https://deliveryhut.onrender.com/services", data)
        .then((result) => {
          if (result?.data?.insertedId) {
            swal({
              title: "Successfully add a service",
              icon: "success",
            });
            reset();
            navigate(redirectUrl);
          }
        });
    };
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

            <Form.Group controlId="formFile" className="mb-3">
              <Form.Label>Upload Service Image</Form.Label>
              <Form.Control
                type="file"
                accept="image/*"
                {...register("img", { required: true })}
              />
            </Form.Group>
            {errors.img && (
              <span className="text-danger">Image is required</span>
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
