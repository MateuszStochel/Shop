import React from "react";

import { useParams } from "react-router-dom";
import { StateContext, useStateValue } from "../../../App/StateProvider";

import "../Components/ItemDetails.css";

function Item() {
  const [{ products, basket }, dispatch] = useStateValue();

  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: getItem.title,
        price: getItem.price,
        image: getItem.image,
      },
    });
  };

  let { category } = useParams();
  let { id } = useParams();

  const getItem = products[0][category].find((prod) => prod);

  return (
    <div className="item">
      <h1 className="item__main__title">Opis produktu</h1>
      <div className="item__left__right">
        <div className="item__left">
          <img src={getItem.image} className="image" alt={getItem.title} />
        </div>
        <div className="item__right">
          <h1>{getItem.title}</h1>
          <p>{getItem.info}</p>
          <div className="item__price">
            <span>Cena:</span>
            <span>{getItem.price} PLN</span>
          </div>
          <div className="item__colour">
            <p>Kolor</p>
            <select name="Colour">
              <option value="white">Bialy</option>
              <option value="red">Czerwony</option>
            </select>
          </div>
          <div className="item__size">
            <p>Rozmiar:</p>
            <select name="Size">
              <option value="s">S</option>
              <option value="xxl">XXL</option>
            </select>
          </div>
          <button onClick={addToBasket} className="item__button">
            Dodaj do koszyka
          </button>
        </div>
      </div>
    </div>
  );
}

export default Item;
