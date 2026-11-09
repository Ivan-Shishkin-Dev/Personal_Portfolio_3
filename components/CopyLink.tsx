"use client";

import { useRef, useState } from "react";

type State = "idle" | "copied" | "failed";

export default function CopyLink({ label, value }: { label: string; value: string }) {
  const [state, setState] = useState<State>("idle");
  const timer = useRef<number | undefined>(undefined);

  const onClick = () => {
    window.clearTimeout(timer.current);
    navigator.clipboard.writeText(value).then(
      () => {
        setState("copied");
        timer.current = window.setTimeout(() => setState("idle"), 2600);
      },
      // The address stays on screen so it can still be selected by hand.
      () => setState("failed"),
    );
  };

  return (
    <button
      type="button"
      className="copy-link"
      onClick={onClick}
      aria-label={`Copy ${value} to clipboard`}
      title="Click to copy"
    >
      <span aria-live="polite">
        {state === "idle" ? label : value}
        {state === "copied" ? <span className="copy-note"> copied</span> : null}
      </span>
    </button>
  );
}
