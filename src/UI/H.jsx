import { cn } from "../cn.js";
import React from "react";

function H({ children, className }) {
  return (
    <h1 className={cn("text-5xl font-dm-serif", className)}>{children}</h1>
  );
}

export default H;
