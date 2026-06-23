"use client";

import { useState } from "react";
import type { Contact } from "@/content/contacts";

export default function CopyContactRow({ contact }: { contact: Contact }) {
  const [copied, setCopied] = useState(false);

  const onClick = () => {
    if (!contact.copy) return;
    navigator.clipboard.writeText(contact.copy).then(() => {
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1400);
    });
  };

  return (
    <button
      type="button"
      className={`contact-row${contact.primary ? " primary" : ""}`}
      onClick={onClick}
      aria-label={`Copy ${contact.copy} to clipboard`}
    >
      <span className="contact-intent">{contact.intent}</span>
      <span className="contact-channel">
        {contact.label && <span className="contact-name">{contact.label}</span>}
        <span className={`contact-handle${copied ? " copied" : ""}`}>
          {copied ? "Copied" : contact.handle}
        </span>
      </span>
    </button>
  );
}
