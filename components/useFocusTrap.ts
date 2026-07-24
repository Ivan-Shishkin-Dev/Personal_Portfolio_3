"use client";

import { useEffect, type RefObject } from "react";

const FOCUSABLE =
  'a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), select:not([disabled]), iframe, [tabindex]:not([tabindex="-1"])';

export default function useFocusTrap(
  active: boolean,
  frameRef: RefObject<HTMLElement | null>,
) {
  useEffect(() => {
    if (!active) return;
    const frame = frameRef.current;
    if (!frame) return;

    const previous = document.activeElement as HTMLElement | null;
    if (!frame.contains(previous)) {
      const target =
        frame.querySelector<HTMLElement>("[data-autofocus]") ??
        frame.querySelector<HTMLElement>(FOCUSABLE);
      target?.focus();
    }

    const onKey = (e: KeyboardEvent) => {
      if (e.key !== "Tab") return;
      const focusable = Array.from(
        frame.querySelectorAll<HTMLElement>(FOCUSABLE),
      );
      if (focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      const current = document.activeElement;
      if (e.shiftKey) {
        if (current === first || !frame.contains(current)) {
          e.preventDefault();
          last.focus();
        }
      } else if (current === last || !frame.contains(current)) {
        e.preventDefault();
        first.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("keydown", onKey);
      previous?.focus();
    };
  }, [active, frameRef]);
}
