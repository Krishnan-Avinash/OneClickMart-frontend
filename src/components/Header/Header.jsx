import React from "react";
import { Outlet } from "react-router-dom";
import Logo from "./Left/Logo";
import AllPages from "./Mid/AllPages";
import SearchNCart from "./Right/SearchNCart";

const Header = () => {
  return (
    <>
      <main className="header-container">
        <Logo />
        <AllPages />
        <SearchNCart />
      </main>
      <Outlet />
    </>
  );
};

export default Header;
