import React from "react";
import { Button, ButtonGroup, Col, Row } from "react-bootstrap";
import "./ManageSingleOrder.css";

const ManageSingleOrder = ({ order }) => {
  const { userName, userEmail, userImg, serviceName, date, status, img } =
    order;
  return (
    <>
      {/* <div className="order-details-box d-flex gap-4 align-items-center shadow"></div> */}
      <Row className="shadow px-3 py-3 rounded-3 align-items-center g-4">
        <Col md={6} lg={3}>
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
        <Col md={6} lg={3}>
          <div className="text-center">
            <img
              className="w-75 img-fluid rounded-3 shadow-sm"
              src={img}
              alt=""
            />
          </div>
        </Col>
        <Col md={6} lg={3}>
          <div className="order-details">
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
        <Col md={6} lg={3}>
          <div className="text-end">
            <ButtonGroup size="md">
              <Button
                // onClick={() => hanldeDelete(_id)}
                variant="outline-light"
              >
                Edit Status
              </Button>
              <Button
                // onClick={() => hanldeDelete(_id)}
                variant="outline-light"
              >
                Cancel
              </Button>
            </ButtonGroup>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default ManageSingleOrder;
