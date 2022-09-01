import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  Button,
  ButtonGroup,
  Col,
  Container,
  Row,
  Spinner,
} from "react-bootstrap";
import { confirmAlert } from "react-confirm-alert";
import { useNavigate, useParams } from "react-router";
import swal from "sweetalert";
import useDocumentTitle from "../../../../hooks/useDocumentTitle";
import OthersBanner from "../../../Shared/OthersBanner/OthersBanner";

import { faBan, faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const UpdateStatus = () => {
  // dynamic title
  useDocumentTitle("Update Order");
  const { id } = useParams();
  //   states
  const [order, setOrder] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  // redirect private route
  const navigate = useNavigate();
  const redirectUrl = "/manageAllOrders";

  useEffect(() => {
    setIsLoading(true);

    fetch(`https://deliveryhut.onrender.com/orders/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setOrder(data);
        setIsLoading(false);
      });
  }, [id]);

  const { _id, userImg, userName, userEmail, img, serviceName, status, date } =
    order;

  const handleApproveStatus = (id) => {
    order.status = "Approved";
    setOrder(order);

    if (status === "Approved") {
      swal({
        title: "Hey, Already approved",
        icon: "info",
      });
      return;
    }

    confirmAlert({
      message: "Are you sure want to Approve?",
      buttons: [
        {
          label: "Yes",
          onClick: () => {
            axios
              .put(`https://deliveryhut.onrender.com/orders/${id}`, order)
              .then((result) => {
                if (result.data?.modifiedCount > 0) {
                  swal({
                    title: "Booking successfully approved!",
                    icon: "success",
                  });
                  navigate(redirectUrl);
                }
              });
          },
        },
        {
          label: "No",
          onClick: () => {
            return;
          },
        },
      ],
    });
  };

  const handleRejectStatus = (id) => {
    order.status = "Rejected";
    setOrder(order);

    if (status === "Rejected") {
      swal({
        title: "Hey, Already rejected",
        icon: "info",
      });
      return;
    }

    confirmAlert({
      message: "Are you sure want to Reject?",
      buttons: [
        {
          label: "Yes",
          onClick: () => {
            axios
              .put(`https://deliveryhut.onrender.com/orders/${id}`, order)
              .then((result) => {
                if (result.data?.modifiedCount > 0) {
                  swal({
                    title: "Booking Rejected!",
                    icon: "success",
                  });
                  navigate(redirectUrl);
                }
              });
          },
        },
        {
          label: "No",
          onClick: () => {
            return;
          },
        },
      ],
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
      <OthersBanner>Update Order Status</OthersBanner>
      <Container className="py-5 px-3 px-sm-5 colored-bg text-white rounded-3 shadow my-4">
        <Row className="shadow px-3 py-3 rounded-3 align-items-center g-4 animate__animated animate__fadeInTopRight">
          <Col md={6} lg={5} xl={4}>
            <div className="d-flex gap-3 flex-column flex-md-row text-center text-md-start align-items-center">
              <div>
                <img src={userImg} className="order-user-img" alt="" />
              </div>
              <div className="mt-2 mt-md-0">
                <h5>{userName}</h5>
                <p>{userEmail}</p>
              </div>
            </div>
          </Col>
          <Col md={6} lg={3} xl={4}>
            <div className="text-center">
              <img
                className="w-75 img-fluid rounded-3 shadow-sm"
                src={img}
                alt=""
              />
            </div>
          </Col>
          <Col md={6} lg={4} xl={4}>
            <div className="order-details text-center text-md-start">
              <h4 className="mt-3 mt-lg-0 serive-title">{serviceName}</h4>

              <p>
                Status: <b>{status}</b>
              </p>
              <p>
                Arrival date:
                <b> {date}</b>
              </p>
            </div>
          </Col>
          <Col md={6} lg={12} xl={12}>
            <div className="text-end">
              <ButtonGroup
                size="md"
                className="animate__animated animate__backInUp animate__delay-1s"
              >
                <Button
                  onClick={() => handleApproveStatus(_id)}
                  variant="outline-light"
                >
                  <span className="me-2">
                    <FontAwesomeIcon icon={faCheck} />
                  </span>
                  Approve
                </Button>
                <Button
                  onClick={() => handleRejectStatus(_id)}
                  variant="outline-light"
                >
                  <span className="me-2">
                    <FontAwesomeIcon icon={faBan} />
                  </span>
                  Reject
                </Button>
              </ButtonGroup>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default UpdateStatus;
