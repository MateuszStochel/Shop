import React from "react";

import "./Item.css";
import { useParams } from "react-router-dom";
import { useStateValue } from "./StateProvider";

function Item() {
  const [{ basket, products }, dispatch] = useStateValue();
  let { category } = useParams();
  let { id } = useParams();
  console.log(typeof id);

  const getItem = products[0][category]
    .map((prod) => prod)
    .find((prod) => prod.id === +id);

  return (
    <div className="item">
      <div className="item__left__right">
        <div className="item__left">
          <img src={getItem.image} className="image" alt={getItem.title} />
          <div className="item__options">
            <div></div>
            <div></div>
          </div>
        </div>
        <div className="item__right">
          <h1>Przykladowa Bluza</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque quo
            sapi ente excepturi doloremque quos beatae ea repudiandae deleniti
            tempora ipsum aspernatur dolorum nihil dignissimos modi et soluta
            amet, quasi possimus iste optio ullam quae dolores? Ab mollitia quam
            qui v oluptates perspiciatis ipsa, id maxime nesciunt tempora
            corrupti, itaque iste officia!
          </p>
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
          <button className="item__button">Dodaj do koszyka</button>
        </div>
      </div>
    </div>
  );
}

export default Item;
