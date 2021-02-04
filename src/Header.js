import React from "react";
import { Link } from "react-router-dom";

import { useStateValue } from "./StateProvider";

import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";

import "./Header.css";
import { auth } from "./firebase";

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
        <span>&</span>
        <h1 className="header__title2">MEN</h1>
        <ul className="header__nav__wrapper">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/shop">Shop</Link>
          </li>
          <li>
            <Link to="/">Login</Link>
          </li>
          <li>
            <Link to="/checkout">
              <div className="header__optionBasket">
                <ShoppingBasketIcon />
                <span className="header__basketCounter">{basket?.length}</span>
              </div>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
