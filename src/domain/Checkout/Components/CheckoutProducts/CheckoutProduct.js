import React from "react";
import { useStateValue } from "../../../../App/StateProvider";

import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";

import "./CheckoutProduct.css";
import { withSnackbar } from "react-simple-snackbar";
import { options } from "../../../../App/Snackbar/Snackbar";

function CheckoutProduct({ id, image, title, price, openSnackbar }) {
  const addProduct = () => {
    openSnackbar("Dodano produkt", [700]);
    addToBasket();
  };
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
      <p className="checkoutProduct__title">{title}</p>
      <img className="checkoutProduct__img" src={image} alt="furniture" />
      <div className="checkoutProduct__info">
        <p className="checkoutProduct__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <p>
          Ilosc: <span>{basCounter}</span>
        </p>

        <div className="wrapper">
          <button onClick={removeFromBasket}>
            <RemoveIcon />
          </button>
          <button onClick={() => addProduct()}>
            <AddIcon />
          </button>
        </div>
      </div>
    </div>
  );
}

export default withSnackbar(CheckoutProduct, options);
