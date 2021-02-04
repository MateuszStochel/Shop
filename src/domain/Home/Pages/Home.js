import React from "react";

import SubHome from "../Components/SubHome/SubHome";
import img from "../../../img/clark-street-mercantile-qnKhZJPKFD8-unsplash.jpg";

import "../Components/Home.css";

const Home = () => {
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
