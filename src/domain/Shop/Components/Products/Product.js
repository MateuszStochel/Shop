import React from "react";
import { Link } from "react-router-dom";
import { withSnackbar } from "react-simple-snackbar";
import { options } from "../../../../App/Snackbar/Snackbar";

import { useStateValue } from "../../../../App/StateProvider";

import "./Product.css";

function Product({ id, title, price, image, category, openSnackbar }) {
  const addProduct = () => {
    openSnackbar("Dodano produkt", [700]);
    addToBasket();
  };
  const [, dispatch] = useStateValue();

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
      </div>
      <div className="product__buttons__wrapper">
        <button onClick={() => addProduct()}>Dodaj do koszyka</button>
        <Link to={`/product/${category}/${id}`}>Sprawdz produkt</Link>
      </div>
    </div>
  );
}

export default withSnackbar(Product, options);
