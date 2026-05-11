"use client";

import { useState } from "react";
import NotionLightbox from "./NotionLightbox";

const READING_LIST_URL =
  "https://ahead-yak-80d.notion.site/ebd//2c15ce59771880f59b90caa499c283f6";

export default function ReadingList() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <li className="media-item">
        <button
          type="button"
          className="media-name"
          aria-haspopup="dialog"
          onClick={(e) => {
            (e.currentTarget as HTMLButtonElement).blur();
            setOpen(true);
          }}
        >
          Reading list
        </button>
        <p className="media-note">
          A growing collection of what I&apos;ll read — articles, blog posts, books.
        </p>
      </li>
      {open && (
        <NotionLightbox
          url={READING_LIST_URL}
          title="Reading list"
          onClose={() => setOpen(false)}
        />
      )}
    </>
  );
}
