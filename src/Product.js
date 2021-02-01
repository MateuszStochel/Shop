import React from "react";
import { useStateValue } from "./StateProvider";
import "./Product.css";

function Product({ id, title, price, rating, image }) {
  const [{ basket }, dispatch] = useStateValue();

  console.log(basket);
  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        price: price,
        rating: rating,
        image: image,
      },
    });
  };
  return (
    <div className="product">
      <img className="checkoutProduct__image" src={image} alt="furniture" />
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>*</p>
            ))}
        </div>
      </div>

      <button onClick={addToBasket}>Add to basket</button>
    </div>
  );
}

export default Product;
