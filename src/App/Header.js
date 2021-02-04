import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

import { useStateValue } from "./StateProvider";

import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import ShowSideBar from "../ShowSideBar";
import "./Header.css";
import { auth } from "../firebase";

const Header = () => {
  const [{ basket, user }, dispatch] = useStateValue();
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);
  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  };

  return (
    <div className="header">
      <ShowSideBar onShowSidebar={showSidebar} />
      <div className={sidebar ? "header__nav" : "nav__menu"}>
        <div className="h1">
          <h1 className="header__title">WOMEN</h1>
          <span>&</span>
          <h1 className="header__title2">MEN</h1>
        </div>
        <ul className="header__nav__wrapper">
          <li>
            <NavLink exact to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/login">Login</NavLink>
          </li>
          <li>
            <NavLink to="/shop">Shop</NavLink>
          </li>
          <li>
            <Link to="/">Login</Link>
          </li>
          <li>
            <NavLink to="/checkout">
              <div className="header__optionBasket">
                <ShoppingBasketIcon />
                <span className="header__basketCounter">{basket?.length}</span>
              </div>
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="header__nav"></div>
    </div>
  );
};

export default Header;
