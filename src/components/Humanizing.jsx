import React from "react";
import H from "../UI/H.jsx";
// import bg-image from '../images/bg-pattern-intro-left-mobile.svg'

function Humanizing() {
  return (
    <div className="bg-primary-700 text-base-110 space-y-3 font-karla py-24 px-8 ">
      <H className="text-center text-5xl font-semibold">
        Humanizing your insurance.
      </H>
      <p className="text-[0.7rem] text-base-500">
        Get your life insurance coverage easier and faster. We blend our
        expertise and technology to help you find the plan that’s right for you.
        Ensure you and your loved ones are protected.
      </p>
      <button>View plans</button>
    </div>
  );
}

export default Humanizing;
