import React from "react";

import "./Item.css";
import { useParams } from "react-router-dom";
import { useStateValue } from "./StateProvider";

function Item() {
  const [{ basket, products }, dispatch] = useStateValue();
  let { category } = useParams();
  let { id } = useParams();

  console.log(category, id);
  return (
    <div className="item">
      <h1 className="item__title"></h1>
      <div className="item__left__right">
        <div className="item__left">
          <div className="image"></div>
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
            <span>140 PLN</span>
          </div>
          <div className="item__colour">
            <p>Kolor</p>
            <select name="Colour">
              <option value="white">White</option>
              <option value="red">Red</option>
            </select>
          </div>
          <div className="item__size">
            <p>Rozmiar:</p>
            <select name="Size">
              <option value="s">S</option>
              <option value="xxl">XXL</option>
            </select>
          </div>
          <button className="item__button">Dodaj</button>
        </div>
      </div>
    </div>
  );
}

export default Item;
