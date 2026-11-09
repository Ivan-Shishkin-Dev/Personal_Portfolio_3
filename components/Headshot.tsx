"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const CAPTIONS = [
  "I see you looking closer lol",
  "back again?",
  "ok, now it's weird",
  "at this point just email me",
];

export default function Headshot() {
  const popoverRef = useRef<HTMLDivElement>(null);
  const [opens, setOpens] = useState(0);

  useEffect(() => {
    const el = popoverRef.current;
    if (!el) return;
    const onToggle = (e: Event) => {
      if ((e as ToggleEvent).newState === "open") setOpens((n) => n + 1);
    };
    el.addEventListener("toggle", onToggle);
    return () => el.removeEventListener("toggle", onToggle);
  }, []);

  return (
    <div className="home-figure">
      <button
        type="button"
        className="home-photo"
        aria-label="Enlarge photo"
        popoverTarget="headshot-large"
      >
        <Image
          src="/headshot.png"
          alt="Ivan Shishkin"
          fill
          sizes="(max-width: 640px) 180px, 220px"
          quality={100}
          priority
        />
      </button>
      <div ref={popoverRef} id="headshot-large" popover="auto" className="headshot-large">
        <button
          type="button"
          aria-label="Close photo"
          popoverTarget="headshot-large"
          popoverTargetAction="hide"
        >
          <Image
            src="/headshot.png"
            alt="Ivan Shishkin"
            width={1086}
            height={1448}
            sizes="(max-width: 480px) 80vw, 340px"
            quality={100}
            loading="eager"
          />
          <span>{CAPTIONS[Math.min(Math.max(opens, 1), CAPTIONS.length) - 1]}</span>
        </button>
      </div>
    </div>
  );
}
