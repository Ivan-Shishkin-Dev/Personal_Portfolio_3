"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { sections } from "@/content/sections";

export default function SiteHeader({
  currentSlug,
}: {
  currentSlug?: string;
}) {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open]);

  return (
    <header className="site-head">
      <Link className="name" href="/">Ivan Shishkin</Link>
      <nav className="site-nav" id="site-nav" aria-label="Sections">
        {sections.map((s) => (
          <Link
            key={s.slug}
            href={`/${s.slug}`}
            aria-current={s.slug === currentSlug ? "page" : undefined}
          >
            <span className="num" aria-hidden>{s.numeral}.</span>
            <span className="label">{s.title}</span>
          </Link>
        ))}
      </nav>
      <button
        type="button"
        className="site-nav-toggle"
        aria-label="Open section menu"
        aria-expanded={open}
        aria-controls="site-nav-overlay"
        onClick={() => setOpen(true)}
      >
        +
      </button>

      {mounted && open &&
        createPortal(
          <div
            id="site-nav-overlay"
            className="site-nav-overlay"
            role="dialog"
            aria-modal="true"
            aria-label="Sections"
            onClick={() => setOpen(false)}
          >
            <div
              className="site-nav-overlay-frame"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                className="site-nav-overlay-close"
                aria-label="Close section menu"
                onClick={() => setOpen(false)}
              >
                ×
              </button>
              <nav className="site-nav-overlay-list" aria-label="Sections">
                {sections.map((s) => (
                  <Link
                    key={s.slug}
                    href={`/${s.slug}`}
                    aria-current={s.slug === currentSlug ? "page" : undefined}
                    onClick={() => setOpen(false)}
                  >
                    <span className="num" aria-hidden>{s.numeral}.</span>
                    <span className="label">{s.title}</span>
                  </Link>
                ))}
              </nav>
            </div>
          </div>,
          document.body,
        )}
    </header>
  );
}
