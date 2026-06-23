"use client";

import { useState } from "react";
import NotionLightbox from "./NotionLightbox";

const READING_LIST_URL =
  "https://ahead-yak-80d.notion.site/ebd//2c15ce59771880f59b90caa499c283f6";

export default function NotionLink() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <p style={{ textAlign: "center", margin: "28px 0 0" }}>
        <button
          type="button"
          className="media-name"
          aria-haspopup="dialog"
          onClick={(e) => {
            (e.currentTarget as HTMLButtonElement).blur();
            setOpen(true);
          }}
        >
          Open on Notion
        </button>
      </p>
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
