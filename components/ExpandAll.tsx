"use client";

import { useEffect, useState } from "react";

export default function ExpandAll() {
  const [allOpen, setAllOpen] = useState(false);

  useEffect(() => {
    const sync = () => {
      const toggles = [...document.querySelectorAll<HTMLDetailsElement>("details.toggle")];
      setAllOpen(toggles.length > 0 && toggles.every((d) => d.open));
    };
    sync();
    document.addEventListener("toggle", sync, true);
    return () => document.removeEventListener("toggle", sync, true);
  }, []);

  const flip = () => {
    document.querySelectorAll<HTMLDetailsElement>("details.toggle").forEach((d) => {
      d.open = !allOpen;
    });
  };

  return (
    <div className="expand-all">
      <span>Click a row to expand it.</span>
      <button type="button" onClick={flip}>
        {allOpen ? "Collapse all" : "Expand all"}
      </button>
    </div>
  );
}
