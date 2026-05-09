"use client";

import { useContext, useEffect, useState } from "react";
import { HobbyActiveContext } from "./HobbyItem";
import NotionLightbox from "./NotionLightbox";

const GAMES_URL = "https://ahead-yak-80d.notion.site/ebd//2c15ce59771880c299a9e1fd03f40c19";

export default function GamesDetail() {
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
        I have played a lot of video games in my time, definitely could not name them all.
        Recent rotation is comfort-loop modded sandbox (Terraria + Calamity, Minecraft modpacks)
        with YouTube on the side, mostly because of limited time. The full list of what I want
        to play next is here{" "}
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
        </button>
        .
      </p>
      {open && (
        <NotionLightbox
          url={GAMES_URL}
          title="Games to play"
          onClose={() => setOpen(false)}
          onHoverChange={setLightboxActive}
        />
      )}
    </>
  );
}
