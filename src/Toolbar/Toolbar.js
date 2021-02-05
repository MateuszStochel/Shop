import React from "react";
import { NavLink } from "react-router-dom";

import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";

import DrawerToggleButton from "../SideDrawer/DrawerToggleButton";
import { navigationMenu } from "../App/Navigation/SideDrawerItems";

import "./Toolbar.css";
import { useStateValue } from "../App/StateProvider";

const Toolbar = ({ drawerClickHandler }) => {
  const [{ basket }] = useStateValue();
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
                <NavLink to={nav.pathUrl}>{nav.linkName}</NavLink>
              </li>
            ))}
          </ul>
        </div>
        <div className="spacer" />
        <div className="toolbar__navigation__items">
          <ul className="toolbar__navigation__link">
            <li>
              <a href="/">Login</a>
            </li>
            <li className="toolbar__optionBasket">
              <ShoppingBasketIcon />
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
