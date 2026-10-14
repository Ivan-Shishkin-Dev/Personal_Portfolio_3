"use client";

import { OPEN_TERMINAL } from "./Terminal";

export default function TerminalButton() {
  return (
    <button
      type="button"
      className="terminal-button"
      onClick={() => window.dispatchEvent(new Event(OPEN_TERMINAL))}
      aria-label="Open terminal"
    >
      <span aria-hidden="true">&gt;_</span>
      <kbd>⌘K</kbd>
    </button>
  );
}
