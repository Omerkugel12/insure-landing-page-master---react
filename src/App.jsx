import { useState } from "react";
import NavBar from "./components/NavBar";
import imageF from "./images/image-intro-mobile.jpg";
import Humanizing from "./components/Humanizing";

function App() {
  return (
    <div className="text-base ">
      <NavBar />
      <img src={imageF} alt="" />
      <Humanizing />
    </div>
  );
}

export default App;
