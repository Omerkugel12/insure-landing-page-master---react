import React from "react";
import logo from "../images/logo.svg";
import hamburger from "../images/icon-hamburger.svg";

function NavBar() {
  return (
    <div className="flex">
      <img src={logo} alt="logo" />
      <img src={hamburger} alt="hamburger" />
    </div>
  );
}

export default NavBar;
