import React from "react";

import SubHomeWomen from "./SubHomeWomen";
import SubHomeMen from "./SubHomeMen";
import SubHomePromo from "./SubHomePromo";

import "./Subhome.css";

function SubHome() {
  return (
    <>
      <div className="subhome">
        <SubHomeWomen />
        <SubHomeMen />
        <SubHomePromo />
      </div>
    </>
  );
}

export default SubHome;
