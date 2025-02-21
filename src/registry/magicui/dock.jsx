import React from "react";

export function Dock({ children, direction = "middle", className = "" }) {
  let justifyClass = "justify-center";
  if (direction === "left") justifyClass = "justify-start";
  else if (direction === "right") justifyClass = "justify-end";
  return <div className={`flex ${justifyClass} items-center ${className}`}>{children}</div>;
}

export function DockIcon({ children, className = "" }) {
  return <div className={`flex items-center justify-center mx-2 ${className}`}>{children}</div>;
}
