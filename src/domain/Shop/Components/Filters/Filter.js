import React, { useRef } from "react";
import { useHistory } from "react-router-dom";
import "./Filter.css";

function Filter() {
  let history = useHistory();
  const ads = useRef();
  const test = () => {
    history.push(`/shop?kategorie=${ads.current.value}`);
  };
  return (
    <div className="filter">
      <h2 className="filter__title">Kategorie</h2>
      <select onChange={test} ref={ads} name="products">
        <option value="Wszystkie">Wszystkie</option>
        <option value="Koszulki">Koszulki</option>
        <option value="Bluzy">Bluzy</option>
        <option value="Garnitury">Garnitury</option>
        <option value="Bluzki">Bluzki</option>
        <option value="Spodnie">Spodnie</option>
        <option value="Sukienki">Sukienki</option>
      </select>
    </div>
  );
}

export default Filter;
