import React from "react";
import { Link } from "react-router-dom";
import longLogo from "../../../assets/longLogo.png";

const Logo = () => {
  return (
    <div className="exceptcart-left">
      <Link to={"/"}>
        <img src={longLogo} alt="Company Logo" />
      </Link>
    </div>
  );
};

export default Logo;
