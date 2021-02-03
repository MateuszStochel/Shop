import React from "react";

import "./Subhome.css";
import SubHomeWomen from "./SubHomeWomen";
import SubHomeMen from "./SubHomeMen";
import SubHomePromo from "./SubHomePromo";

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
