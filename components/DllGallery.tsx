"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const photos = [
  { name: "presentation", alt: "Presenting Science Inquiry Studio in a science classroom", width: 1350, height: 1800 },
  { name: "classroom", alt: "Sharing the lab’s work during a classroom presentation", width: 1800, height: 1350 },
  { name: "group", alt: "A group photo at a Digital Learning Lab gathering", width: 1800, height: 1350 },
  { name: "coast", alt: "An outing with the group along the coast", width: 1800, height: 1350 },
  { name: "milkshakes", alt: "Enjoying milkshakes together at an outdoor café", width: 1800, height: 1350 },
];

export default function DllGallery() {
  const [selected, setSelected] = useState(0);
  const [open, setOpen] = useState(false);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const photo = photos[selected];

  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = previousOverflow; };
  }, [open]);

  function move(direction: number) {
    setSelected((current) => (current + direction + photos.length) % photos.length);
  }

  return (
    <section className="dll-gallery" aria-label="Digital Learning Lab photos">
      <div className="dll-gallery-heading">
        <span>Moments from the lab</span>
        <span>5 photos · Click to expand</span>
      </div>
      <div className="dll-gallery-strip">
        {photos.map((item, index) => (
          <button
            className="dll-gallery-thumb"
            type="button"
            key={item.name}
            aria-label={`View photo ${index + 1}: ${item.alt}`}
            onClick={() => {
              setSelected(index);
              dialogRef.current?.showModal();
              setOpen(true);
            }}
            style={{ aspectRatio: `${item.width} / ${item.height}` }}
          >
            <Image src={`/images/dll/${item.name}.webp`} alt={item.alt} fill sizes="(max-width: 640px) 240px, 294px" />
          </button>
        ))}
      </div>
      <dialog
        ref={dialogRef}
        className="dll-gallery-dialog"
        aria-label="Digital Learning Lab photo viewer"
        onClose={() => setOpen(false)}
        onClick={(event) => {
          if (event.target === event.currentTarget) dialogRef.current?.close();
        }}
        onKeyDown={(event) => {
          if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
            event.preventDefault();
            move(event.key === "ArrowLeft" ? -1 : 1);
          }
        }}
      >
        {open && (
          <div className="dll-gallery-viewer">
            <div className="dll-gallery-controls">
              <span aria-live="polite">{selected + 1} / {photos.length}</span>
              <button type="button" onClick={() => dialogRef.current?.close()} autoFocus>Close ×</button>
            </div>
            <Image src={`/images/dll/${photo.name}.webp`} alt={photo.alt} width={photo.width} height={photo.height} sizes="90vw" />
            <div className="dll-gallery-controls">
              <button type="button" onClick={() => move(-1)} aria-label="Previous photo">← Previous</button>
              <button type="button" onClick={() => move(1)} aria-label="Next photo">Next →</button>
            </div>
          </div>
        )}
      </dialog>
    </section>
  );
}
