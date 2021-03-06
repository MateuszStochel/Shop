import React from "react";
import { useHistory } from "react-router-dom";

import img4 from "../../../../img/javier-reyes-qi2cD5oR_fE-unsplash.jpg";
import img5 from "../../../../img/mubariz-mehdizadeh-o-wlIFT4zE4-unsplash (1).jpg";
import img6 from "../../../../img/karsten-winegeart-pFK8FlbBtts-unsplash.jpg";

import { CategoryRoute } from "../../../../App/Router/CategoryRoot";

function SubHomeMen() {
  const history = useHistory();
  const onCategoryClick = (category) => {
    console.log(CategoryRoute.resolveCategoryClothes(category));
    history.push(CategoryRoute.resolveCategoryClothes(category));
  };
  return (
    <>
      <h2 className="subhome__main__title">Moda Meska</h2>
      <div className="subhome__container">
        <div
          onClick={() => onCategoryClick(CategoryRoute.GARNITURY)}
          className="subhome__row"
        >
          <img src={img4} alt="suits" />
          <div className="subhome__row__info">
            <h1>Garnitury</h1>
            <p>Zobacz wiecej</p>
          </div>
        </div>
        <div
          className="subhome__row"
          onClick={() => onCategoryClick(CategoryRoute.BLUZY)}
        >
          <img src={img5} alt="hoodies" />
          <div className="subhome__row__info">
            <h1>Bluzy</h1>
            <p>Zobacz wiecej</p>
          </div>
        </div>
        <div
          className="subhome__row"
          onClick={() => onCategoryClick(CategoryRoute.KOSZULKI)}
        >
          <img src={img6} alt="T-shirt" />
          <div className="subhome__row__info">
            <h1>Koszulki</h1>
            <p>Zobacz wiecej</p>
          </div>
        </div>
      </div>
      <div
        onClick={() => onCategoryClick(CategoryRoute.WSZYSTKIE)}
        className="subhome__wrap__button"
      >
        <button>Przejdz do sklepu</button>
      </div>
    </>
  );
}

export default SubHomeMen;
