import Link from "next/link";
import type { ReactNode } from "react";

export type Project = {
  title: string;
  blurb: ReactNode;
  tags: string[];
  links: { label: string; href: string }[];
  year: string;
  group: string;
};

export const projects: Project[] = [
  {
    title: "Construction-Verification",
    blurb: (
      <>
        Building with{" "}
        <a
          href="https://alieldaoushyuci.github.io/portfolio/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Ali Eldaoushy
        </a>
        . A consolidated platform that verifies workers' paperwork so they can get onto the job site. Learn more in{" "}
        <Link href="/experience">experience</Link>.
      </>
    ),
    tags: ["React", "Supabase", "External APIs"],
    links: [
      {
        label: "Construction-Verification ↗",
        href: "https://github.com/alieldaoushyuci/Construction-Verification",
      },
    ],
    year: "2026",
    group: "Main / Jobs",
  },
  {
    title: "AI Safety Website",
    blurb: (
      <>
        The club site for AI Safety @ UCI. Continuing to run it after{" "}
        <a
          href="https://harrywaterman.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Harry Waterman
        </a>{" "}
        built the original.
      </>
    ),
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    links: [
      {
        label: "AI Safety @ UCI ↗",
        href: "https://aisafetyuci.org/",
      },
    ],
    year: "2026",
    group: "Main / Jobs",
  },
  {
    title: "Notes",
    blurb:
      "A small pipeline that has Claude rewrite my Obsidian markdown notes. Markdown in, edits I can review back out.",
    tags: ["Claude Code", "Markdown Files", "Obsidian"],
    links: [
      {
        label: "Read my notes! ↗",
        href: "https://ivan-shishkin-dev.github.io/notes/",
      },
    ],
    year: "2026",
    group: "Tinkering",
  },
  {
    title: "ClaudeStatusBar",
    blurb:
      "A custom status line for Claude Code's terminal UI. A shell script that replaces the default bottom bar with something I'd rather look at.",
    tags: ["Shell", "Claude Code"],
    links: [
      {
        label: "Claude Status Bar ↗",
        href: "https://github.com/Ivan-Shishkin-Dev/ClaudeStatusBar",
      },
    ],
    year: "2026",
    group: "Tinkering",
  },
  {
    title: "Ivan-NeoVim",
    blurb:
      "My personal Neovim configuration. Plugins, keymaps, and tweaks shaped to how I actually edit.",
    tags: ["Lua", "Scripting"],
    links: [
      {
        label: "Check out my config! ↗",
        href: "https://github.com/Ivan-Shishkin-Dev/Ivan-NeoVim",
      },
    ],
    year: "2026",
    group: "Tinkering",
  },
  {
    title: "Bingo (Informatics 43 Project)",
    blurb:
      "A mobile social discovery app for meeting nearby people with shared interests, with strong privacy controls and an Interest Bingo mode that nudges users toward communities outside their bubble. Quarter-long team project for UCI's Informatics 43 (Introduction to Software Engineering).",
    tags: ["TypeScript", "Supabase", "Next.js"],
    links: [
      {
        label: "Bingo ↗",
        href: "https://inf43-project-bingo.vercel.app",
      },
    ],
    year: "2026",
    group: "Hackathons / Class",
  },
  {
    title: "HomePilot",
    blurb:
      "Hackathon project. AI assistant for first-time renters that monitors listings, flags scams, and walks you through applying.",
    tags: ["Groq API", "Vercel", "Next.js"],
    links: [
      {
        label: "HomePilot ↗",
        href: "https://v0-homepilot.vercel.app/",
      },
    ],
    year: "2026",
    group: "Hackathons / Class",
  },
  {
    title: "Personal_Portfolio_3",
    blurb:
      "The site you're on. Editorial, typography-forward, in Next.js 16. Third iteration of my personal page.",
    tags: ["Next.js", "TypeScript", "CSS"],
    links: [
      {
        label: "GitHub for Website ↗",
        href: "https://github.com/Ivan-Shishkin-Dev/Personal_Portfolio_3",
      },
    ],
    year: "2026",
    group: "Personal Portfolios",
  },
  {
    title: "Personal_Portfolio_2",
    blurb: "Personal site, version two. Hosted on GitHub Pages.",
    tags: ["React", "Three.js", "GSAP"],
    links: [
      {
        label: "Personal Portfolio 2 ↗",
        href: "https://ivan-shishkin-dev.github.io/Personal_Portfolio_2/",
      },
    ],
    year: "2025",
    group: "Personal Portfolios",
  },
  {
    title: "Personal_Portfolio_1",
    blurb:
      "First personal site. Where I started learning what I wanted a personal page to feel like.",
    tags: ["CSS", "HTML", "JavaScript"],
    links: [
      {
        label: "Personal Portfolio 1 ↗",
        href: "https://ivan-shishkin-dev.github.io/Personal_Portfolio_1/",
      },
    ],
    year: "2025",
    group: "Personal Portfolios",
  },
];
