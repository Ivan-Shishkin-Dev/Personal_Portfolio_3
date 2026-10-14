import Link from "next/link";
import type { ReactNode } from "react";

export type Project = {
  title: string;
  blurb: ReactNode;
  href?: string;
  year: string;
  group: string;
  video?: { src: string; poster: string };
};

export const projects: Project[] = [
  {
    title: "Science Inquiry Studio",
    video: {
      src: "/videos/science-inquiry-studio.mp4",
      poster: "/videos/science-inquiry-studio-poster.jpg",
    },
    blurb: (
      <>
        An AI-supported science platform for grades 6–8 that I'm building at
        the UCI Digital Learning Lab. Students use AI to learn key scientific
        topics while practicing AI literacy. More in{" "}
        <Link href="/experience">experience</Link>.
      </>
    ),
    href: "https://sinq.studio/",
    year: "2026",
    group: "Main / Jobs",
  },
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
        . A consolidated platform that verifies workers' paperwork so they can get onto the job site. The repo stays private, but there's more in{" "}
        <Link href="/experience">experience</Link>.
      </>
    ),
    year: "2026",
    group: "Main / Jobs",
  },
  {
    title: "AI Safety Website",
    blurb: "The club site for AI Safety @ UCI.",
    href: "https://aisafetyuci.org/",
    year: "2026",
    group: "Main / Jobs",
  },
  {
    title: "Notes",
    blurb:
      "A small pipeline that has Claude rewrite my Obsidian markdown notes. Markdown in, edits I can review back out.",
    href: "https://ivan-shishkin-dev.github.io/notes/",
    year: "2026",
    group: "Tinkering",
  },
  {
    title: "ClaudeStatusBar",
    blurb:
      "A custom status line for Claude Code's terminal UI. A shell script that replaces the default bottom bar with something I'd rather look at.",
    href: "https://github.com/Ivan-Shishkin-Dev/ClaudeStatusBar",
    year: "2026",
    group: "Tinkering",
  },
  {
    title: "Ivan-NeoVim",
    blurb:
      "My personal Neovim configuration. Plugins, keymaps, and tweaks shaped to how I actually edit.",
    href: "https://github.com/Ivan-Shishkin-Dev/Ivan-NeoVim",
    year: "2026",
    group: "Tinkering",
  },
  {
    title: "GymTrak",
    blurb:
      "A gym tracker I built for myself because I am really into lifting and wanted full control of my app without paying for other stuff, good practice too.",
    href: "https://github.com/Ivan-Shishkin-Dev/GymTrak",
    year: "2026",
    group: "Tinkering",
  },
  {
    title: "Bingo (Informatics 43 Project)",
    blurb:
      "A mobile social discovery app for meeting nearby people with shared interests, with strong privacy controls and an Interest Bingo mode that nudges users toward communities outside their bubble. Quarter-long team project for UCI's Informatics 43 (Introduction to Software Engineering).",
    href: "https://inf43-project-bingo.vercel.app",
    year: "2026",
    group: "Hackathons / Class",
  },
  {
    title: "HomePilot",
    blurb:
      "Hackathon project. AI assistant for first-time renters that monitors listings, flags scams, and walks you through applying.",
    href: "https://v0-homepilot.vercel.app/",
    year: "2026",
    group: "Hackathons / Class",
  },
  {
    title: "Personal_Portfolio_3",
    blurb:
      "The site you're on. Editorial, typography-forward, in Next.js 16. Third iteration of my personal page.",
    href: "https://github.com/Ivan-Shishkin-Dev/Personal_Portfolio_3",
    year: "2026",
    group: "Personal portfolios",
  },
  {
    title: "Personal_Portfolio_2",
    blurb: "Personal site, version two. Hosted on GitHub Pages.",
    href: "https://ivan-shishkin-dev.github.io/Personal_Portfolio_2/",
    year: "2025",
    group: "Personal portfolios",
  },
  {
    title: "Personal_Portfolio_1",
    blurb:
      "First personal site. Where I started learning what I wanted a personal page to feel like.",
    href: "https://ivan-shishkin-dev.github.io/Personal_Portfolio_1/",
    year: "2025",
    group: "Personal portfolios",
  },
];
