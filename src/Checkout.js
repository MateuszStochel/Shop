import React from "react";

import Subtotal from "./Subtotal";

import "./Checkout.css";
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";

function Checkout() {
  const [{ basket }, dispatch] = useStateValue();
  console.log(useStateValue(), "eaassas");
  return (
    <div className="checkout">
      <div className="checkout__left">
        <div className="checkout__banner">BANNER</div>
        <div>
          <h2 className="checkout__title">Your shopping Basket</h2>
        </div>
        {basket.map((item) => (
          <CheckoutProduct
            id={item.id}
            title={item.title}
            price={item.price}
            rating={item.rating}
            image={item.image}
          />
        ))}
      </div>

      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
