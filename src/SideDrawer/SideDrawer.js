import React from "react";
import { useHistory } from "react-router-dom";

import CloseIcon from "@material-ui/icons/Close";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";

import { navigationMenu } from "../App/Navigation/SideDrawerItems";

import "./SideDrawer.css";

const SideDrawer = ({ show, onShow, ...props }) => {
  const history = useHistory();

  const changeUrl = (url) => {
    history.push(url);
    onShow(!show);
  };

  return (
    <nav {...props}>
      <div className="sidedrawer__toggle">
        <CloseIcon onClick={() => onShow(!show)} />
      </div>
      <ul className="sidedrawer__links__wrapper">
        {navigationMenu.map((nav) => (
          <li onClick={() => changeUrl(nav.pathUrl)}>
            <span>{nav.linkName}</span>
          </li>
        ))}
        <li
          onClick={() => changeUrl("/checkout")}
          className="side__drawer__optionBasket"
        >
          <span>Login</span>
          <ShoppingBasketIcon />
        </li>
      </ul>
    </nav>
  );
};

export default SideDrawer;
