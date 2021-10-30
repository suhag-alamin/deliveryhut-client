import React from "react";
import { Button } from "react-bootstrap";
import "./SingleOrder.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faBan, faStream } from "@fortawesome/free-solid-svg-icons";

const SingleOrder = ({ order, hanldeDelete }) => {
  const { _id, serviceName, img, date, status } = order;
  return (
    <>
      <div className="order-details-box d-flex gap-4 justify-content-between align-items-center shadow">
        <div>
          <img className="order-img img-fluid" src={img} alt="" />
        </div>
        <div className="order-details">
          <h4 className="mt-3 mt-lg-0 serive-title">{serviceName}</h4>
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
        <div className="">
          <Button
            onClick={() => hanldeDelete(_id)}
            className="deliveryhut-outline-bt"
            variant="outline-light"
          >
            <span className="me-2">
              <FontAwesomeIcon icon={faBan} />
            </span>
            Cancel
          </Button>
        </div>
      </div>
    </>
  );
};

export default SingleOrder;
