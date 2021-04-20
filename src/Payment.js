import React from "react";

import { useStateValue } from "./App/StateProvider";

import "./Payment.css";

function Payment() {
  return (
    <div className="payment">
      <div className="payment container">
        <div className="payment__section">
          <div className="payment__title">
            <h3>Delivery Adress</h3>
          </div>
          <div className="payment__adress">
            <p>12 xxx xxx</p>
            <p>12 xxx xxx</p>
          </div>
        </div>
        <div className="payment__section">
          <div className="payment__title">
            <h3>Review items and Delivery</h3>
          </div>
          <div className="payment__items"></div>
        </div>
        <div className="payment__section">
          <div className="payment__title"></div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
