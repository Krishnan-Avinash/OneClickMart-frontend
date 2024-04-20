import React from "react";
import ForthTop from "./top/ForthTop";
import ForthProducts from "./elements/ForthProducts";
import ForthBottom from "./bottom/ForthBottom";

const Forth = () => {
  return (
    <div className="forth-main">
      <ForthTop />
      <ForthProducts />
      <ForthBottom />
    </div>
  );
};

export default Forth;
