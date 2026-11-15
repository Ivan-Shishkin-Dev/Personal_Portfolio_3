"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { sendFeedback } from "./sendFeedback";

type Status = "idle" | "sending" | "success" | "error";

export default function FeedbackForm({ label = "Anonymous feedback" }: { label?: string }) {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");
  const dialogRef = useRef<HTMLDialogElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  function show() {
    dialogRef.current?.showModal();
    textareaRef.current?.focus();
    setOpen(true);
  }

  function close() {
    dialogRef.current?.close();
  }

  function onClose() {
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
        onClick={show}
      >
        {label}
      </button>

      {mounted &&
        createPortal(
          <dialog
            ref={dialogRef}
            className="feedback-frame"
            aria-label="Anonymous feedback"
            onClose={onClose}
            onClick={(e) => {
              if (e.target === e.currentTarget) close();
            }}
          >
            <div className="feedback-panel">
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
                    ref={textareaRef}
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
          </dialog>,
          document.body,
        )}
    </>
  );
}
