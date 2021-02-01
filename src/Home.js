import React from "react";

import Product from "./Product";

import "./Home.css";
import img from "./img/toa-heftiba-FV3GConVSss-unsplash.jpg";

const Home = () => {
  return (
    <div className="home">
      <div className="home__container">
        <img className="home__image" src={img} alt="Furniture" />
        <div className="home__row">
          <Product title="The lean startup" price={39.99} id={333} rating={3} />
          <Product
            title="The lean startup"
            price={39.99}
            id={3334}
            rating={3}
          />
        </div>
        <div className="home__row">
          <Product
            title="The lean startup"
            price={39.99}
            id={3335}
            rating={3}
          />
          <Product
            title="The lean startup"
            price={39.99}
            id={3336}
            rating={3}
          />
          <Product
            title="The lean startup"
            price={39.99}
            id={3337}
            rating={3}
          />
        </div>
        <div className="home__row">
          <Product
            title="The lean startup"
            price={39.99}
            id={3338}
            rating={3}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
