import React from "react";

import SubHome from "./SubHome";
import "./Home.css";
import img from "./img/clark-street-mercantile-qnKhZJPKFD8-unsplash.jpg";
import { useStateValue } from "./StateProvider";

const Home = () => {
  const [{ basket, user, products }, dispatch] = useStateValue();

  return (
    <div className="home">
      <div className="home__container">
        <img className="home__image" src={img} alt="Furniture" />
        <SubHome />
      </div>
    </div>
  );
};

export default Home;
