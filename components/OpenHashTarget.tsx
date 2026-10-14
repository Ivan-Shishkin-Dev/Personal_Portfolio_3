"use client";

import { useEffect } from "react";

// Links like /experience#digital-learning-lab point at a collapsed <details>; open it so the jump lands on content.
export default function OpenHashTarget() {
  useEffect(() => {
    const open = () => {
      const id = decodeURIComponent(window.location.hash.slice(1));
      const el = id ? document.getElementById(id) : null;
      if (el instanceof HTMLDetailsElement) el.open = true;
    };
    open();
    window.addEventListener("hashchange", open);
    return () => window.removeEventListener("hashchange", open);
  }, []);
  return null;
}
