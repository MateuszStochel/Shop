import React from "react";
import "./CheckoutProduct.css";
import { useStateValue } from "../../../../App/StateProvider";

function CheckoutProduct({ id, image, title, price, rating }) {
  const [{ basket }, dispatch] = useStateValue();
  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };
  return (
    <div className="checkoutProduct">
      <img className="checkoutProduct__img" src={image} alt="furniture" />
      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{title}</p>
        <p className="checkoutProduct__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <button onClick={removeFromBasket}>Remove from Basket</button>
        <button>+</button>
        <button onClick={removeFromBasket}>-</button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
