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
      <div className="header__nav"></div>
    </div>
  );
};

export default Header;
