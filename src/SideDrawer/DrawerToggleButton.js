import { requirePropFactory } from "@material-ui/core";

import React from "react";

import "./DrawerToggleButton.css";

const DrawerToggleButton = ({ click }) => {
  return (
    <button className="drawerToggleButton" onClick={click}>
      <div className="drawerToggleButton__line" />
      <div className="drawerToggleButton__line" />
      <div className="drawerToggleButton__line" />
    </button>
  );
};

export default DrawerToggleButton;
