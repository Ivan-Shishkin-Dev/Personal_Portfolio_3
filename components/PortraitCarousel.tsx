"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { portraits } from "@/content/portraits";

export default function PortraitCarousel() {
  const [i, setI] = useState(0);
  const [fade, setFade] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const startX = useRef(0);
  const dx = useRef(0);
  const dragging = useRef(false);
  const n = portraits.length;

  const go = (d: number) => {
    setFade(true);
    setTimeout(() => {
      setI((p) => (p + d + n) % n);
      setFade(false);
    }, 150);
  };

  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        go(-1);
      }
      if (e.key === "ArrowRight") {
        e.preventDefault();
        go(1);
      }
    };
    el.addEventListener("keydown", onKey);
    return () => el.removeEventListener("keydown", onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [n]);

  const cur = portraits[i];

  return (
    <div
      className="portrait-carousel"
      data-portrait
      ref={rootRef}
      tabIndex={0}
    >
      <div
        className="portrait-viewport"
        onTouchStart={(e) => {
          dragging.current = true;
          startX.current = e.touches[0].clientX;
          dx.current = 0;
        }}
        onTouchMove={(e) => {
          if (dragging.current) {
            dx.current = e.touches[0].clientX - startX.current;
          }
        }}
        onTouchEnd={() => {
          if (!dragging.current) return;
          dragging.current = false;
          if (Math.abs(dx.current) > 30) go(dx.current < 0 ? 1 : -1);
        }}
      >
        <div
          className="portrait-track"
          style={{ transform: `translateX(-${i * 100}%)` }}
        >
          {portraits.map((p, idx) => (
            <div key={idx} className={`portrait-slide ${p.pattern}`}>
              <Image
                src={p.src}
                alt={p.alt}
                fill
                sizes="220px"
                style={{ objectFit: "cover" }}
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).style.display = "none";
                }}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="portrait-controls">
        <button
          className="portrait-nav prev"
          type="button"
          aria-label="Previous photo"
          onClick={() => go(-1)}
        >
          ←
        </button>
        <span className="portrait-counter">
          {i + 1} / {n}
        </span>
        <button
          className="portrait-nav next"
          type="button"
          aria-label="Next photo"
          onClick={() => go(1)}
        >
          →
        </button>
      </div>
      <div className={`portrait-caption${fade ? " fade" : ""}`}>
        {cur.caption}
        <span className="date">{cur.date}</span>
      </div>
    </div>
  );
}
