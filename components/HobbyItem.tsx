"use client";

import { createContext, useState } from "react";

export const HobbyActiveContext = createContext(false);

type Props = {
  title: string;
  summary: string;
  children: React.ReactNode;
  titleHref?: string;
  alwaysOpen?: boolean;
};

export default function HobbyItem({ title, summary, children, titleHref, alwaysOpen }: Props) {
  const [pinned, setPinned] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);
  const active = alwaysOpen || hovered || focused || pinned;

  const handleToggle = (e: React.MouseEvent<HTMLButtonElement>) => {
    const isKeyboard = e.detail === 0;
    const hasHover =
      typeof window !== "undefined" &&
      window.matchMedia("(hover: hover)").matches;
    if (hasHover && !isKeyboard) {
      e.currentTarget.blur();
      return;
    }
    setPinned((p) => !p);
  };

  if (alwaysOpen) {
    return (
      <li className="hobby" data-static>
        <div className="hobby-head hobby-head-static">
          <span className="hobby-head-text">
            {titleHref ? (
              <a
                className="hobby-title hobby-title-link"
                href={titleHref}
                target="_blank"
                rel="noopener noreferrer"
              >
                {title}
              </a>
            ) : (
              <span className="hobby-title">{title}</span>
            )}
            <span className="hobby-summary">{summary}</span>
          </span>
        </div>
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
      {titleHref ? (
        <div className="hobby-head hobby-head-linked">
          <span className="hobby-head-text">
            <a
              className="hobby-title hobby-title-link"
              href={titleHref}
              target="_blank"
              rel="noopener noreferrer"
            >
              {title}
            </a>
            <button
              type="button"
              className="hobby-summary-toggle"
              aria-expanded={pinned}
              onClick={handleToggle}
            >
              {summary}
            </button>
          </span>
          <span className="hobby-mark" aria-hidden="true">+</span>
        </div>
      ) : (
        <button
          type="button"
          className="hobby-head"
          aria-expanded={pinned}
          onClick={handleToggle}
        >
          <span className="hobby-head-text">
            <span className="hobby-title">{title}</span>
            <span className="hobby-summary">{summary}</span>
          </span>
          <span className="hobby-mark" aria-hidden="true">+</span>
        </button>
      )}
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
