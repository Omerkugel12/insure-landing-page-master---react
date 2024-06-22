import React from "react";
import { cn } from "../cn";

function A({ children, className }) {
  return (
    <a
      className={cn(
        "tracking-widest text-base-500 font-semibold cursor-pointer hover:text-base-700 transition-transform",
        className
      )}
    >
      {children}
    </a>
  );
}

export default A;
