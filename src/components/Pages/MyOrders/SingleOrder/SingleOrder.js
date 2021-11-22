import {
  faBan,
  faCheck,
  faCreditCard,
  faMoneyBillWave,
  faStream,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Button, ButtonGroup, Col, Row } from "react-bootstrap";
import { useNavigate } from "react-router";
import "./SingleOrder.css";

const SingleOrder = ({ order, hanldeDelete }) => {
  const { _id, serviceName, img, date, status } = order;
  const navigate = useNavigate();
  const handlePayment = (id) => {
    navigate(`/payment/${id}`);
  };
  return (
    <>
      <Row className="order-details-box d-md-flex align-items-center shadow animate__animated animate__fadeInUpBig">
        <Col md={6} lg={6} xl={4}>
          <div>
            <img className="order-img img-fluid" src={img} alt="" />
          </div>
        </Col>
        <Col md={6} lg={6} xl={4}>
          <div className="order-details">
            <h5 className="mt-3 mt-lg-0 serive-title">{serviceName}</h5>
            <p>
              Status:{" "}
              {status === "Approved" && (
                <span className="mx-2">
                  <FontAwesomeIcon icon={faCheck} />
                </span>
              )}
              {status === "Rejected" && (
                <span className="mx-2">
                  <FontAwesomeIcon icon={faBan} />
                </span>
              )}
              {status === "pending" && (
                <span className="mx-2">
                  <FontAwesomeIcon icon={faStream} />
                </span>
              )}{" "}
              <b>{status}</b>
            </p>
            <p>
              Arrival date:
              <b> {date}</b>
            </p>
          </div>
        </Col>
        <Col md={12} lg={12} xl={4}>
          <div className="text-end mt-3 mt-xl-0">
            <ButtonGroup className=" animate__animated animate__backInUp animate__delay-1s">
              {order?.payment ? (
                <Button variant="outline-light p-1">
                  <span className="me-2">
                    <FontAwesomeIcon icon={faMoneyBillWave} />
                  </span>
                  Paid
                </Button>
              ) : (
                <Button
                  variant="outline-light"
                  onClick={() => handlePayment(_id)}
                >
                  <span className="me-2">
                    <FontAwesomeIcon icon={faCreditCard} />
                  </span>
                  Pay
                </Button>
              )}

              <Button variant="outline-light" onClick={() => hanldeDelete(_id)}>
                <span className="me-2">
                  <FontAwesomeIcon icon={faBan} />
                </span>
                Cancel
              </Button>
            </ButtonGroup>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default SingleOrder;
