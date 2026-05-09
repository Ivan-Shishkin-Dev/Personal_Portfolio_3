"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

type Props = {
  url: string;
  title: string;
  onClose: () => void;
  onHoverChange?: (hovered: boolean) => void;
};

export default function NotionLightbox({
  url,
  title,
  onClose,
  onHoverChange,
}: Props) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [onClose]);

  if (!mounted) return null;

  return createPortal(
    <div
      className="notion-lightbox"
      role="dialog"
      aria-modal="true"
      aria-label={title}
      onClick={onClose}
      onMouseEnter={() => onHoverChange?.(true)}
      onMouseLeave={() => onHoverChange?.(false)}
    >
      <button
        type="button"
        className="notion-lightbox-close"
        aria-label="Close"
        onClick={(e) => {
          e.stopPropagation();
          onClose();
        }}
      >
        ×
      </button>
      <div
        className="notion-lightbox-frame"
        onClick={(e) => e.stopPropagation()}
      >
        <iframe src={url} title={title} loading="lazy" />
      </div>
    </div>,
    document.body,
  );
}
