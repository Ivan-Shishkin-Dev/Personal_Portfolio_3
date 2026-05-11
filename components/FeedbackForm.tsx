"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

const ACCESS_KEY = "588824fa-09ac-46ae-ae60-a14808218451";
const SUBJECT = "Anonymous feedback — ivanshishkin.com";

type Status = "idle" | "sending" | "success" | "error";

export default function FeedbackForm() {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

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

    const formData = new FormData();
    formData.append("access_key", ACCESS_KEY);
    formData.append("subject", SUBJECT);
    formData.append("from_name", "Anonymous (ivanshishkin.com)");
    formData.append("message", message);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();
      if (data.success) {
        setStatus("success");
        setTimeout(close, 1800);
      } else {
        setStatus("error");
        setError(data.message || "Something went wrong. Try again.");
      }
    } catch {
      setStatus("error");
      setError("Network error. Try again.");
    }
  }

  return (
    <>
      <button
        type="button"
        className="feedback-trigger"
        onClick={() => setOpen(true)}
      >
        Tell me what to get better at
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
                    autoFocus
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
