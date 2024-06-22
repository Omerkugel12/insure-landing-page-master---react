import React from "react";
import logo from "../images/logo.svg";
import hamburger from "../images/icon-hamburger.svg";
import Button from "../UI/Button";
import A from "../UI/A";

function NavBar() {
  return (
    <div className="flex justify-between bg-base-110 w-full p-4 px-24 h-12 text-center items-center">
      <img src={logo} alt="logo" className="w-[5rem] h-3" />
      <ul className="flex space-x-6 uppercase text-[0.6rem]">
        <li>
          <A href="" className="font-karla tracking-wider">
            How we work
          </A>
        </li>
        <li>
          <A href="">Blog</A>
        </li>
        <li>
          <A href="">Account</A>
        </li>
        <li>
          <Button navBtn>View plans</Button>
        </li>
      </ul>
      <img src={hamburger} alt="hamburger" className="size-6 hidden" />
    </div>
  );
}

export default NavBar;
