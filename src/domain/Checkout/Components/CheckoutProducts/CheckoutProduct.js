import React from "react";
import "./CheckoutProduct.css";
import { useStateValue } from "../../../../App/StateProvider";

function CheckoutProduct({ id, image, title, price }) {
  const [{ basket }, dispatch] = useStateValue();
  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id,
      title,
      price,
      image,
    });
  };

  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        price: price,
        image: image,
      },
    });
  };
  const basCounter = Object.values(basket)
    .filter((bas) => bas.id === id)
    .map((bas) => bas.counter);

  return (
    <div className="checkoutProduct">
      <img className="checkoutProduct__img" src={image} alt="furniture" />
      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{title}</p>
        <p className="checkoutProduct__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <button onClick={removeFromBasket}>{basCounter}</button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
