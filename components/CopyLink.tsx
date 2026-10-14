"use client";

import { useState } from "react";

export default function CopyLink({ label, value }: { label: string; value: string }) {
  const [copied, setCopied] = useState(false);

  const onClick = () => {
    navigator.clipboard.writeText(value).then(() => {
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1400);
    });
  };

  return (
    <button
      type="button"
      className="copy-link"
      onClick={onClick}
      aria-label={`Copy ${value} to clipboard`}
      title="Click to copy"
    >
      <span aria-live="polite">{copied ? "Copied" : label}</span>
    </button>
  );
}
