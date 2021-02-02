import React from "react";

import Product from "./Product";

import "./Home.css";
import img from "./img/freestocks-_3Q3tsJ01nc-unsplash.jpg";
import { useStateValue } from "./StateProvider";
const categoryField = ["collection", "promo", "checkout"];

const Home = () => {
  const [{ basket, user, products }, dispatch] = useStateValue();
  const hey = products.map((categories) => {
    return (
      <>
        {Array(3)
          .fill()
          .map((_, i) => {
            return (
              <>
                <h2 className="home__row__title">{categoryField[i]}</h2>
                <div className="home__row">
                  {categories[categoryField[i]].map((product) => (
                    <Product
                      category={categoryField[i]}
                      title={product.title}
                      price={product.price}
                      id={product.id}
                      rating={product.rating}
                      image={product.image}
                    />
                  ))}
                </div>
              </>
            );
          })}
      </>
    );
  });

  return (
    <div className="home">
      <div className="home__container">
        <img className="home__image" src={img} alt="Furniture" />
        <div className="home__mainTitles">
          <h2>Woman</h2>
          <h3>New Woman collection</h3>
        </div>
        {hey}
      </div>
    </div>
  );
};

export default Home;
