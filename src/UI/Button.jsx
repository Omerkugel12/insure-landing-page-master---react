import React, { Children } from "react";
import { cn } from "../cn";

function Button({ children, className, navBtn }) {
  return (
    <button
      className={cn(
        "uppercase bg-inherit border px-5 tracking-widest",
        className,
        navBtn &&
          " border-base-700 hover:bg-base-700 hover:text-base-110 font-karla"
      )}
    >
      {children}
    </button>
  );
}

export default Button;
