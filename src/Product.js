import React from "react";
import { useStateValue } from "./StateProvider";
import "./Product.css";
import { Link } from "react-router-dom";

function Product({ id, title, price, rating, image, category }) {
  const [{ basket }, dispatch] = useStateValue();

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
      <Link to={`/product/${category}/${id}`}>
        <img className="checkoutProduct__image" src={image} alt="furniture" />
      </Link>
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
      <div className="product__buttons__wrapper">
        <button onClick={addToBasket}>Add to basket</button>
        <button>Sprawdz produkt</button>
      </div>
    </div>
  );
}

export default Product;
