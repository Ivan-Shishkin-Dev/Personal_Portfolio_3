export type Project = {
  title: string;
  blurb: string;
  tags: string[];
  links: { label: string; href: string }[];
  year: string;
};

export const projects: Project[] = [
  {
    title: "Personal_Portfolio_3",
    blurb:
      "The site you're on. Editorial, typography-forward, written from scratch in Next.js 16. Third iteration of my personal page.",
    tags: ["Next.js", "TypeScript", "CSS"],
    links: [
      {
        label: "github.com/Ivan-Shishkin-Dev/Personal_Portfolio_3 ↗",
        href: "https://github.com/Ivan-Shishkin-Dev/Personal_Portfolio_3",
      },
    ],
    year: "2026",
  },
  {
    title: "Construction-Verification",
    // TODO: 1-sentence description of what the app actually does
    blurb:
      "Building with Ali Eldaoushy. [TODO: what the app does.] More context in the experience section.",
    tags: [/* TODO: stack */],
    links: [
      {
        label: "github.com/alieldaoushyuci/Construction-Verification ↗",
        href: "https://github.com/alieldaoushyuci/Construction-Verification",
      },
      {
        label: "Ali Eldaoushy ↗",
        href: "http://alieldaoushyuci.github.io/portfolio/",
      },
      {
        label: "Experience →",
        href: "/experience",
      },
    ],
    year: "2026", // TODO: confirm
  },
  {
    title: "notes",
    blurb:
      "A small pipeline that has Claude rewrite my Obsidian markdown notes. Markdown in, edits I can review back out.",
    tags: [/* TODO: Python / Node / Claude API */],
    links: [
      {
        label: "github.com/Ivan-Shishkin-Dev/notes ↗",
        href: "https://github.com/Ivan-Shishkin-Dev/notes",
      },
    ],
    year: "TODO",
  },
  {
    title: "HomePilot",
    // TODO: 1-sentence description of what HomePilot does
    blurb: "Hackathon project. [TODO: what it does.]",
    tags: [/* TODO: stack */],
    links: [
      {
        label: "github.com/Ivan-Shishkin-Dev/HomePilot ↗",
        href: "https://github.com/Ivan-Shishkin-Dev/HomePilot",
      },
      {
        label: "click for testing ↗",
        href: "https://v0-homepilot.vercel.app/",
      },
    ],
    year: "TODO",
  },
  {
    title: "ivan-shishkin-dev.github.io",
    blurb: "Personal site, version two. Hosted on GitHub Pages.",
    tags: [/* TODO: HTML / CSS / JS / framework? */],
    links: [
      {
        label: "github.com/Ivan-Shishkin-Dev/ivan-shishkin-dev.github.io ↗",
        href: "https://github.com/Ivan-Shishkin-Dev/ivan-shishkin-dev.github.io",
      },
      {
        label: "ivan-shishkin-dev.github.io ↗",
        href: "https://ivan-shishkin-dev.github.io",
      },
    ],
    year: "TODO",
  },
  {
    title: "Old-Website",
    blurb:
      "First personal site. Where I started learning what I wanted a personal page to feel like.",
    tags: [/* TODO */],
    links: [
      {
        label: "github.com/Ivan-Shishkin-Dev/Old-Website ↗",
        href: "https://github.com/Ivan-Shishkin-Dev/Old-Website",
      },
    ],
    year: "TODO",
  },
];
