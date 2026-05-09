"use client";

import { useState } from "react";
import type { Contact } from "@/content/contacts";

const EMAIL = "shishkinivan2006@gmail.com";

export default function EmailCard({ contact }: { contact: Contact }) {
  const [copied, setCopied] = useState(false);

  const onClick = () => {
    navigator.clipboard.writeText(EMAIL).then(() => {
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1400);
    });
  };

  return (
    <button
      type="button"
      className="contact-card email-card"
      onClick={onClick}
      aria-label="Copy email address to clipboard"
    >
      <div className="label">
        <span>{contact.label}</span>
        <span className="arrow" aria-hidden="true">↗</span>
      </div>
      <div className="handle">{contact.handle}</div>
      <div className={`note${copied ? " copied" : ""}`}>
        {copied ? (
          "Copied"
        ) : (
          <>
            <span className="note-default">{contact.note}</span>
            <span className="note-hint">Click to copy</span>
          </>
        )}
      </div>
    </button>
  );
}
