import React from "react";
import logo from "../images/logo.svg";
import hamburger from "../images/icon-hamburger.svg";
import Button from "../UI/Button";

function NavBar() {
  return (
    <div className="flex justify-between bg-base-110 w-full p-4 px-24 h-12 text-center items-center">
      <img src={logo} alt="logo" className="w-[5rem] h-3" />
      <ul className="flex space-x-6 uppercase text-[0.6rem]">
        <li>
          <a href="">How we work</a>
        </li>
        <li>
          <a href="">Blog</a>
        </li>
        <li>
          <a href="">Account</a>
        </li>
        <li>
          <Button>View plans</Button>
        </li>
      </ul>
      <img src={hamburger} alt="hamburger" className="size-6 hidden" />
    </div>
  );
}

export default NavBar;
