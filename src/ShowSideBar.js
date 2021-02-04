import React from "react";
import { Link } from "react-router-dom";

const ShowSideBar = ({ onShowSidebar }) => {
  return (
    <div className="navbar">
      <Link to="#" className="menu-bars">
        <p onClick={onShowSidebar}>C</p>
      </Link>
    </div>
  );
};

export default ShowSideBar;
