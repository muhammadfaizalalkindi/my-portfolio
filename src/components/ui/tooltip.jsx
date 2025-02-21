import React from "react";

export function TooltipProvider({ children }) {
  return <div>{children}</div>;
}

export function Tooltip({ children }) {
  return <div className="relative inline-block group">{children}</div>;
}

export function TooltipTrigger({ children }) {
  return children;
}

export function TooltipContent({ children }) {
  return (
    <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 hidden group-hover:block px-2 py-1 bg-black text-white text-xs rounded shadow">
      {children}
    </div>
  );
}
