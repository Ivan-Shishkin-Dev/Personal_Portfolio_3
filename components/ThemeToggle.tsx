"use client";

import { useEffect, useState } from "react";

type Theme = "light" | "dark";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("light");

  useEffect(() => {
    const current = document.documentElement.getAttribute("data-theme");
    setTheme(current === "dark" ? "dark" : "light");
  }, []);

  const toggle = () => {
    const next: Theme = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.setAttribute("data-theme", next);
    try {
      localStorage.setItem("theme", next);
    } catch {}
  };

  const isDark = theme === "dark";
  const glyph = isDark ? "☾" : "☀";
  const label = isDark ? "Night" : "Day";
  const ariaLabel = isDark ? "Switch to day mode" : "Switch to night mode";

  return (
    <button
      className="theme-toggle"
      type="button"
      aria-label={ariaLabel}
      onClick={toggle}
    >
      <span className="glyph" suppressHydrationWarning>{glyph}</span>
      <span className="label" suppressHydrationWarning>{label}</span>
    </button>
  );
}
