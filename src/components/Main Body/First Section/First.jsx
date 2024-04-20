import React from "react";
import MainFirstLeft from "./Left/MainFirstLeft";
import CarouselDisplay from "./Right/CarouselDisplay";
// import { Outlet } from "react-router-dom";

const First = () => {
  return (
    <div className="firstofmain">
      <MainFirstLeft />
      <CarouselDisplay />
    </div>
  );
};

export default First;
