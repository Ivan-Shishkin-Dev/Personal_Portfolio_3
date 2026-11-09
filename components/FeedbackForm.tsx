"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import useFocusTrap from "./useFocusTrap";
import { sendFeedback } from "./sendFeedback";

type Status = "idle" | "sending" | "success" | "error";

export default function FeedbackForm({ label = "Anonymous feedback" }: { label?: string }) {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");
  const frameRef = useRef<HTMLDivElement>(null);

  useFocusTrap(open, frameRef);

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

  function close() {
    setOpen(false);
    setTimeout(() => {
      setMessage("");
      setStatus("idle");
      setError("");
    }, 200);
  }

  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!message.trim() || status === "sending") return;
    setStatus("sending");
    setError("");

    const result = await sendFeedback(message);
    if (result.ok) {
      setStatus("success");
      setTimeout(close, 1800);
    } else {
      setStatus("error");
      setError(result.error ?? "");
    }
  }

  return (
    <>
      <button
        type="button"
        className="feedback-trigger"
        onClick={() => setOpen(true)}
      >
        {label}
      </button>

      {mounted && open &&
        createPortal(
          <div
            className="feedback-overlay"
            role="dialog"
            aria-modal="true"
            aria-label="Anonymous feedback"
            onClick={close}
          >
            <div
              ref={frameRef}
              className="feedback-frame"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                className="feedback-close"
                aria-label="Close feedback form"
                onClick={close}
              >
                ×
              </button>
              {status === "success" ? (
                <div className="feedback-success">
                  <p className="feedback-eyebrow">Sent</p>
                  <p className="feedback-thanks">Thanks for the note.</p>
                </div>
              ) : (
                <form onSubmit={submit}>
                  <p className="feedback-eyebrow">Anonymous feedback</p>
                  <h2 className="feedback-title">What can I get better at?</h2>
                  <textarea
                    name="message"
                    required
                    data-autofocus
                    rows={6}
                    placeholder="Be honest. Nothing identifying is sent."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    disabled={status === "sending"}
                  />
                  <input
                    type="text"
                    name="botcheck"
                    style={{ display: "none" }}
                    tabIndex={-1}
                    autoComplete="off"
                  />
                  <div className="feedback-actions">
                    <button
                      type="submit"
                      disabled={status === "sending" || !message.trim()}
                    >
                      {status === "sending" ? "Sending…" : "Send"}
                    </button>
                  </div>
                  {error && <p className="feedback-error">{error}</p>}
                </form>
              )}
            </div>
          </div>,
          document.body,
        )}
    </>
  );
}
