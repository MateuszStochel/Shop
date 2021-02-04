import React from "react";
import "./Payment.css";
import { useStateValue } from "./App/StateProvider";

function Payment() {
  const [{ basket, user }, dispatch] = useStateValue();
  const hey = basket.map((item) => console.log(item));
  return (
    <div className="payment">
      {hey}
      <div className="payment container">
        <div className="payment__section">
          <div className="payment__title">
            <h3>Delivery Adress</h3>
          </div>
          <div className="payment__adress">
            <p>{user?.email}</p>
            <p>12 xxx xxx</p>
            <p>12 xxx xxx</p>
          </div>
        </div>
        <div className="payment__section">
          <div className="payment__title">
            <h3>Review items and Delivery</h3>
          </div>
          <div className="payment__items">
            {basket.map((item) => console.log(item))}
          </div>
        </div>
        <div className="payment__section">
          <div className="payment__title"></div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
