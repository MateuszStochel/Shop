import React from "react";
import { NavLink } from "react-router-dom";

import { auth } from "../firebase";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";

import DrawerToggleButton from "../SideDrawer/DrawerToggleButton";
import { navigationMenu } from "../App/Navigation/SideDrawerItems";

import "./Toolbar.css";
import { useStateValue } from "../App/StateProvider";

const Toolbar = ({ drawerClickHandler }) => {
  const [{ basket, user }] = useStateValue();

  const handleAuthentication = () => {
    if (user) {
    }
  };
  return (
    <header className="toolbar">
      <nav className="toolbar__navigation">
        <div className="toolbar__logo">
          <h1 className="toolbar__title__left">WOMEN</h1>
          <span>&</span>
          <h1 className="toolbar__title__right">MEN</h1>
        </div>
        <div className="spacer" />

        <div className="toolbar__navigation__items">
          <ul className="toolbar__navigation__link">
            {navigationMenu.map((nav) => (
              <li>
                <NavLink exact to={nav.pathUrl}>
                  {nav.linkName}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
        <div className="spacer" />
        <div className="toolbar__navigation__items">
          <ul className="toolbar__navigation__link">
            <li onClick={handleAuthentication}>
              <NavLink to="/login">{user ? "Sign out" : "Sign In"}</NavLink>
            </li>
            <li className="toolbar__optionBasket">
              <NavLink to="/checkout">
                <ShoppingBasketIcon />
              </NavLink>
              <span>{basket?.length}</span>
            </li>
          </ul>
        </div>
        <div className="toolbar__toggle__button">
          <DrawerToggleButton click={drawerClickHandler} />
        </div>
      </nav>
    </header>
  );
};

export default Toolbar;
