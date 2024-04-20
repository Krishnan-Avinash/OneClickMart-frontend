import React, { useState } from "react";
import { Link } from "react-router-dom";
import cartImg from "../../../assets/cart2.png";

import { useSelector } from "react-redux";

const Cart = () => {
  const totalQuantity = useSelector((state) => state.reducer.totalQuantity);
  // const [data, setData] = useState(0);
  return (
    <div className="cart">
      <Link to={"/cart"} className="">
        <img src={cartImg} alt="Cart" />
      </Link>
      <span>{totalQuantity}</span>
    </div>
  );
};

export default Cart;
