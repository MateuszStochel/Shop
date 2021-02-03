import React from "react";
import img from "./img/faith-yarn-hgtWvsq5e2c-unsplash.jpg";
import img2 from "./img/ussama-azam-xgNSlx7DjYM-unsplash.jpg";
import img3 from "./img/vladimir-fedotov-MPfyh3xJ1iE-unsplash.jpg";
function SubHomeWomen() {
  return (
    <>
      <h2 className="subhome__main__title">Moda Damska</h2>
      <div className="subhome__container">
        <div className="subhome__row">
          <img src={img} alt="top" />
          <div className="subhome__row__info">
            <h1>Bluzki</h1>
            <p>Zobacz wiecej</p>
          </div>
        </div>
        <div className="subhome__row">
          <img src={img2} alt="dress" />
          <div className="subhome__row__info">
            <h1>Sukienki</h1>
            <p>Zobacz wiecej</p>
          </div>
        </div>
        <div className="subhome__row">
          <img src={img3} alt="trousers" />
          <div className="subhome__row__info">
            <h1>Spodnie</h1>
            <p>Zobacz wiecej</p>
          </div>
        </div>
      </div>
      <div className="subhome__wrap__button">
        <button>Przejdz do sklepu</button>
      </div>
    </>
  );
}

export default SubHomeWomen;
