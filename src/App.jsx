import { useState } from "react";
import NavBar from "./components/NavBar";
import imageF from "./images/image-intro-mobile.jpg";
import Humanizing from "./components/Humanizing";

function App() {
  return (
    <div className="text-base ">
      <NavBar />
      <Humanizing />
    </div>
  );
}

export default App;
