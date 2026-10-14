import type { ReactNode } from "react";

export default function Toggle({
  id,
  title,
  meta,
  children,
}: {
  id?: string;
  title: ReactNode;
  meta?: string;
  children: ReactNode;
}) {
  return (
    <details className="toggle" id={id}>
      <summary className="toggle-head">
        <span className="toggle-mark" aria-hidden="true" />
        <span className="toggle-title">{title}</span>
        {meta ? <span className="toggle-meta">{meta}</span> : null}
      </summary>
      <div className="toggle-body">{children}</div>
    </details>
  );
}
