"use client";

import { OPEN_TERMINAL } from "./Terminal";

export default function TerminalButton({ variant = "pill" }: { variant?: "pill" | "hint" }) {
  const open = () => window.dispatchEvent(new Event(OPEN_TERMINAL));

  if (variant === "hint") {
    return (
      <button type="button" className="terminal-hint" onClick={open}>
        <span className="terminal-hint-prompt" aria-hidden="true">$</span>
        <span className="hint-keys">
          Prefer a terminal? Press <kbd>⌘K</kbd> or <kbd>/</kbd> anywhere, or click here.
        </span>
        <span className="hint-touch">Prefer a terminal? Tap here to open one.</span>
      </button>
    );
  }

  return (
    <button type="button" className="terminal-button" onClick={open} aria-label="Open terminal">
      <span className="terminal-button-prompt" aria-hidden="true">&gt;_</span>
      <span className="terminal-button-label">terminal</span>
      <kbd>⌘K</kbd>
    </button>
  );
}
