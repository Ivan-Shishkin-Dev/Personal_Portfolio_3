"use client";

import { useContext, useEffect, useState } from "react";
import { HobbyActiveContext } from "./HobbyItem";
import NotionLightbox from "./NotionLightbox";

const LIFTING_URL = "https://ahead-yak-80d.notion.site/ebd//2c15ce59771880a68ee3c5e7069177cb";

export default function LiftingDetail() {
  const [open, setOpen] = useState(false);
  const [lightboxActive, setLightboxActive] = useState(false);
  const sourceActive = useContext(HobbyActiveContext);

  useEffect(() => {
    if (!open) return;
    if (sourceActive || lightboxActive) return;
    const timer = setTimeout(() => setOpen(false), 300);
    return () => clearTimeout(timer);
  }, [open, sourceActive, lightboxActive]);

  return (
    <>
      <p>
        I had a WHOOP for a year and use MacroFactor (thank you Nippard).
        Currently running a 6-day Upper/Lower/Arms x2 split{" "}
        <button
          type="button"
          className="inline-toggle"
          aria-haspopup="dialog"
          onClick={(e) => {
            e.stopPropagation();
            (e.currentTarget as HTMLButtonElement).blur();
            setOpen(true);
          }}
        >
          (check here)
        </button>{" "}
        and will probably be running this for a long time.
      </p>
      <p>
        On the cardio side, walking. 12-15k steps daily, mostly campus, casual sports,
        and being on my feet. Pairs naturally with podcasts and long phone calls.
      </p>
      {open && (
        <NotionLightbox
          url={LIFTING_URL}
          title="Lifting split"
          onClose={() => setOpen(false)}
          onHoverChange={setLightboxActive}
        />
      )}
    </>
  );
}
