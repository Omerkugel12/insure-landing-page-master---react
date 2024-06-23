import React from "react";
import H from "../UI/H.jsx";
import Button from "../UI/Button.jsx";
import { cn } from "../cn.js";
// import bg-image from '../images/bg-pattern-intro-left-mobile.svg'
import introRight from "../images/bg-pattern-intro-right-desktop.svg";
import introLeft from "../images/bg-pattern-intro-left-desktop.svg";
import introRightMobile from "../images/bg-pattern-intro-right-mobile.svg";
import introLeftMobile from "../images/bg-pattern-intro-left-mobile.svg";
import imageIntro from "../images/image-intro-desktop.jpg";

function Humanizing() {
  return (
    <div className="">
      <div className="bg-primary-700 text-base-110 h-[600px] flex items-center justify-center relative">
        <img
          src={introRight}
          alt=""
          className={cn("absolute right-0 top-0 z-[1]")}
        />
        <img
          src={introLeft}
          alt=""
          className={cn("absolute bottom-[-50%] left-0")}
        />
        <div className="flex items-center gap-40 w-[100%] max-w-[1200px] mx-auto my-auto">
          <div className="space-y-8 relative left-20 ">
            <img src={introLeftMobile} alt="" className="hidden" />
            <img src={introRightMobile} alt="" className="hidden" />
            <H className="text-left text-5xl font-semibold">
              Humanizing <br /> your insurance.
            </H>
            <p className="text-[0.7rem] text-base-500 w-80 mr-40">
              Get your life insurance coverage easier and faster. We blend our{" "}
              expertise and technology to help you find the plan that’s right
              for you. Ensure you and your loved ones are protected.
            </p>
            <Button mainBtn>View plans</Button>
          </div>
          <div className="w-100">
            <img
              src={imageIntro}
              alt=""
              className="relative right-28 top-32 "
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Humanizing;
