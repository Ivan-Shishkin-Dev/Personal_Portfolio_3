"use client";

import { createContext, useState } from "react";

export const HobbyActiveContext = createContext(false);

type Props = {
  title: string;
  summary: string;
  children: React.ReactNode;
};

export default function HobbyItem({ title, summary, children }: Props) {
  const [pinned, setPinned] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);
  const active = hovered || focused || pinned;

  return (
    <li
      className="hobby"
      data-open={pinned || undefined}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocusCapture={() => setFocused(true)}
      onBlurCapture={(e) => {
        const next = e.relatedTarget as Node | null;
        if (!next || !e.currentTarget.contains(next)) {
          setFocused(false);
        }
      }}
    >
      <button
        type="button"
        className="hobby-head"
        aria-expanded={pinned}
        onClick={(e) => {
          const isKeyboard = e.detail === 0;
          const hasHover =
            typeof window !== "undefined" &&
            window.matchMedia("(hover: hover)").matches;
          if (hasHover && !isKeyboard) {
            e.currentTarget.blur();
            return;
          }
          setPinned((p) => !p);
        }}
      >
        <span className="hobby-head-text">
          <span className="hobby-title">{title}</span>
          <span className="hobby-summary">{summary}</span>
        </span>
        <span className="hobby-mark" aria-hidden="true">+</span>
      </button>
      <div className="hobby-detail">
        <div className="hobby-detail-inner">
          <div className="hobby-detail-content">
            <HobbyActiveContext.Provider value={active}>
              {children}
            </HobbyActiveContext.Provider>
          </div>
        </div>
      </div>
    </li>
  );
}
