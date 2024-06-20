import React from "react";
import logo from "../images/logo.svg";
import hamburger from "../images/icon-hamburger.svg";

function NavBar() {
  return (
    <>
      <div className="flex justify-between w-full p-4 h-12 text-center items-center">
        <img src={logo} alt="logo" className="" />
        <img src={hamburger} alt="hamburger" className="size-6" />
      </div>
    </>
  );
}

export default NavBar;
