import React from "react";
import First from "./First Section/First";
import Second from "./Second Section/Second";
import Third from "./Third Section/Third";
import Forth from "./Forth Section/Forth";
import Fifth from "./Fifth Section/Fifth";
import Sixth from "./Sixth Section/Sixth";
import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";

const MainHeroSection = () => {
  return (
    <>
      <div className="container">
        <First />
        <Second />
        <Third />
        <Forth />
        <Fifth />
        <Sixth />
      </div>
      <Footer />
    </>
  );
};

export default MainHeroSection;
