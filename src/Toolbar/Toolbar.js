import React from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-scroll";
import uniqid from "uniqid";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";

import DrawerToggleButton from "../SideDrawer/DrawerToggleButton";
import { navigationMenu } from "../App/Navigation/SideDrawerItems";

import "./Toolbar.css";
import { useStateValue } from "../App/StateProvider";
import { auth } from "../firebase";

const Toolbar = ({ drawerClickHandler }) => {
  const [{ basket, user }] = useStateValue();

  const lengthOfBasket = Object.values(basket).reduce(
    (acc, currentValue) => acc + currentValue.counter,
    0
  );
  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
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
              <li key={uniqid()}>
                <NavLink exact to={nav.pathUrl}>
                  {nav.linkName}
                </NavLink>
              </li>
            ))}
            <li>
              <Link
                activeClass="active"
                to="test1"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
              >
                Kontakt
              </Link>
            </li>
          </ul>
        </div>
        <div className="spacer" />
        <div className="toolbar__navigation__items">
          <ul className="toolbar__navigation__link">
            <li onClick={handleAuthentication}>
              <NavLink to={!user && "/login"}>
                {user ? "Sign out" : "Sign In"}
              </NavLink>
            </li>
            <li className="toolbar__optionBasket">
              <NavLink to="/checkout">
                <ShoppingBasketIcon />
              </NavLink>
              <span>{lengthOfBasket}</span>
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
