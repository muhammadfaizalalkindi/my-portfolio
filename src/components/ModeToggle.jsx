"use client";

import { useEffect, useState } from "react";

export function ModeToggle({ className = "" }) {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const theme =
      localStorage.getItem("theme") ||
      (window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light");
    setDark(theme === "dark");
  }, []);

  const toggle = () => {
    if (dark) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setDark(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setDark(true);
    }
  };

  return (
    <button onClick={toggle} className={className}>
      {dark ? "🌞" : "🌙"}
    </button>
  );
}
