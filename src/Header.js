import React from "react";
import { Link } from "react-router-dom";

import { useStateValue } from "./StateProvider";

import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";

import "./Header.css";
import { auth } from "../firebase";

const Header = () => {
  const [{ basket, user }, dispatch] = useStateValue();
  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  };

  return (
    <div className="header">
      <div className="header__nav">
        <h1 className="header__title">WOMEN</h1>
        <div className="header__nav__wrapper">
          <p>Home</p>
          <p>Home</p>
          <p>About us</p>
          <p>Contact us</p>
          <Link to="/checkout">
            <div className="header__optionBasket">
              <ShoppingBasketIcon />
              <span className="header__basketCounter">{basket?.length}</span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
