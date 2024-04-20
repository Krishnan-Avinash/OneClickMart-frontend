import React from "react";
import { Link } from "react-router-dom";
import Sale from "../mid/Sale";

const SecondTop = () => {
  return (
    <div className="secondtop">
      <div className="secondtop-left">
        <h2>Today's</h2>

        <h1>Flash Sales</h1>
      </div>
      <Link to="">
        <button>All products</button>
      </Link>
    </div>
  );
};

export default SecondTop;
