# CLAUDE.md

## What this is

Ivan Shishkin's personal portfolio — a UC Irvine CS student site with a typography-forward, Anthropic Claude-inspired editorial aesthetic. Cream paper palette (#fbf6ea bg, rust accent #7a3d1d), Spectral serif body, Inter sans labels, JetBrains Mono counters, single 640px column, numerated sections I–VI.

## Stack

- Next.js 16 (App Router) + React 19 + TypeScript
- Fonts via `next/font/google` exposed as `--ser`, `--sans`, `--mono` in `app/layout.tsx`
- Plain CSS in `app/globals.css` — no Tailwind, no CSS Modules
- Static content modules under `content/` (`sections.ts`, `projects.tsx`, `contacts.ts`). `projects.tsx` because project blurbs accept inline JSX (e.g. cross-link from Construction-Verification into `/experience`)
- Deployed on Vercel

## Architecture

The home page (`app/page.tsx`) is its own composition. Every sub-page is just `<SectionLayout slug="...">prose</SectionLayout>` — `SectionLayout` renders the subnav, section head, children, `Pager`, and footer. `content/sections.ts` is the single source of truth for navigation order, Roman numerals, and Contents-list descriptions.

## Conventions

- Design tokens in `app/globals.css` are stable. Adjust them; don't fight them with per-component overrides.
- Section pages should be just prose inside `<SectionLayout>`. Don't add layout chrome.
- Light-mode only. No theme toggle, no `data-theme` switching — the `:root` tokens in `app/globals.css` are the sole palette.
- No code comments unless the *why* is non-obvious. Don't narrate WHAT the code does — well-named identifiers handle that.

## Don't (without asking)

- Replace plain CSS with Tailwind or CSS-in-JS
- Redesign typography — Spectral / Inter / JetBrains Mono are deliberate
- Add a state library, CMS, or testing framework. This is a small static portfolio (home + six section pages).
- Add a contact form. Mailto links are intentional.
- Reintroduce a dark mode or theme toggle — site is intentionally light-only.
- Widen `--maxw` (640px) or change `--gap` (60px) casually

## Routes

`/`, `/about`, `/projects`, `/experience`, `/education`, `/skills`, `/media`

## Deploy

Push to `main`. Vercel auto-deploys.
