export type Portrait = {
  src: string;
  alt: string;
  caption: string;
  date: string;
  pattern: "s1" | "s2" | "s3" | "s4";
};

export const portraits: Portrait[] = [
  {
    src: "/portraits/portrait-1.jpg",
    alt: "Move-in day",
    caption: "Move-in day, freshman year. Already lost on Ring Road.",
    date: "Sep 2023",
    pattern: "s1",
  },
  {
    src: "/portraits/portrait-2.jpg",
    alt: "Re-reading Bishop",
    caption: "Re-reading Bishop, chapter 1. Again.",
    date: "Winter 2025",
    pattern: "s2",
  },
  {
    src: "/portraits/portrait-3.jpg",
    alt: "Sunrise run",
    caption: "Sunrise run on the strand. The marine layer never lifted.",
    date: "May 2025",
    pattern: "s3",
  },
  {
    src: "/portraits/portrait-4.jpg",
    alt: "First poster session",
    caption: "First poster session. Survived.",
    date: "Oct 2025",
    pattern: "s4",
  },
];
