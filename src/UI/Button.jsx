import React, { Children } from "react";
import { cn } from "../cn";

function Button({ children, className, navBtn, mainBtn }) {
  return (
    <button
      className={cn(
        "uppercase bg-inherit border px-5 py-0 tracking-widest ",
        className,
        navBtn &&
          " border-base-700 hover:bg-base-700 hover:text-base-110 font-karla",
        mainBtn &&
          "text-[0.8rem] py-1 px-9 hover:text-primary-700 hover:bg-base-110 transition-colors font-semibold"
      )}
    >
      {children}
    </button>
  );
}

export default Button;
