import React from "react";

import Subtotal from "../Components/SubTotal/Subtotal";

import "../Components/Checkout.css";
import { useStateValue } from "../../../App/StateProvider";
import CheckoutProduct from "../Components/CheckoutProducts/CheckoutProduct";

function Checkout() {
  const [{ basket, user }, dispatch] = useStateValue();
  return (
    <div className="checkout">
      <div className="checkout__left">
        <div>
          <h2 className="checkout__title">Twoj koszyk</h2>
        </div>
        {Object.values(basket).map((item) => (
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
