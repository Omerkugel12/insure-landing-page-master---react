import React, { Children } from "react";
import { cn } from "../cn";

function Button({ children, className }) {
  return (
    <button
      className={cn(
        "uppercase bg-inherit border border-base-700 px-5",
        className
      )}
    >
      {children}
    </button>
  );
}

export default Button;
