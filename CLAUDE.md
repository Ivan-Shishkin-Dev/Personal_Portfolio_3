# CLAUDE.md

## What this is

Ivan Shishkin's personal portfolio — a UC Irvine CS student site styled like a Notion workspace with a terminal hidden behind ⌘K. Pages look like Notion pages: breadcrumb bar, emoji page icon, bold sans title, properties, callouts, toggles, sub-page links. Notion palette (white `--bg`, `#37352f` ink, Notion blue `--accent` on hover and focus). Inter for everything on the page; JetBrains Mono only for terminal and code-like bits.

## Stack

- Next.js 16 (App Router) + React 19 + TypeScript
- Inter (`--sans`) and JetBrains Mono (`--mono`) via `next/font/google` in `app/layout.tsx`
- Plain CSS in `app/globals.css` — no Tailwind, no CSS Modules
- Static content modules under `content/` (`sections.ts`, `projects.tsx`, `contacts.ts`, `consumed.ts`). `projects.tsx` because project blurbs accept inline JSX (e.g. cross-link from Construction-Verification into `/experience`)
- Deployed on Vercel

## Architecture

The home page (`app/page.tsx`) is the merged home + about, laid out as a Notion page: the headshot as the page icon, the name as title, then a properties list read from `content/contacts.ts` — an entry with `copy` renders as a click-to-copy button (`CopyLink`), the rest as external links showing their `handle` — plus a Feedback row with the anonymous-feedback modal (`FeedbackForm`, posts to web3forms). The bio follows as prose with one 💡 callout.

Every sub-page is just `<SectionLayout slug="...">prose</SectionLayout>`. `SectionLayout` renders `Topbar` (sticky Notion breadcrumb + terminal launcher), `PageHead` (emoji icon, title, the section's one-line `eyebrow` as subtitle), the children, `SiteNav`, and `SiteFooter`. `content/sections.ts` is the single source of truth for navigation order, icons, and subtitles.

`Topbar` is a breadcrumb, not a nav menu: "Ivan Shishkin / <page>" is the way home. Section navigation is `SiteNav` at the bottom of every page — a Notion-style list of sub-page links (icon + title).

## Terminal (⌘K)

`components/Terminal.tsx` is mounted once in `app/layout.tsx`, so its scrollback and history survive navigation. It is a native `<dialog>` opened by ⌘K / Ctrl+K, `/` (when not typing in a field), or the `>_` button in `Topbar` (`TerminalButton` dispatches the `terminal:open` window event).

- The filesystem is derived, not hand-kept: `~` is home, each entry in `sections.ts` is a directory, and `~/education/consumed-content` maps to `/consumed-content` — so it only shows up when you `ls` inside education, keeping it out of the top-level listing.
- `cd` navigates with the router and closes the terminal; `cwd` comes from the current pathname.
- `open <name>` and `email` read from `content/contacts.ts`. New contacts with an `href` and `label` become `open` targets automatically.
- Commands: help, ls, cd, pwd, cat, whoami, open, email, echo, clear, exit (+ a `sudo` joke). Tab completes, ↑/↓ walk history, Ctrl+L clears, Ctrl+C cancels.

`/consumed-content` is the one exception. It composes `Topbar`/`PageHead`/`SiteNav`/`SiteFooter` itself rather than using `SectionLayout`, because `getSection` throws on any slug missing from `sections.ts` — and keeping it out of that file is what keeps it out of the nav. It is linked from two places only: the Self-Education link on `/education` and the reading bullet in the home TL;DR. It stays out of the nav on purpose. It is still in `sitemap.xml` and indexable.

`/about` and `/contact` no longer exist; `next.config.ts` redirects both to `/` so old links still land.

## Consumed Content (`/consumed-content`)

A searchable list of everything Ivan has read, watched, or listened to. `content/consumed.ts` holds the entries; `ConsumedContent.tsx` renders search, medium filter chips, and the rows.

- **An entry is a title and a URL.** `category` (medium) and `source` are derived from the URL host via lookup tables, with optional per-entry overrides for when that guesses wrong — a book on Google Drive, a podcast episode hosted on YouTube.
- **The file is in the order things were added; the page reverses it** so newest reads first. Append new entries to the bottom.
- **Adding entries means re-running `node scripts/fetch-favicons.mjs`.** It reads hosts straight out of `consumed.ts`, downloads one icon per host into `public/favicons/`, and regenerates `content/favicons.ts` — which is generated, so never edit it by hand.
- Favicons are committed rather than hotlinked: no third-party requests from the page, and nothing breaks when a site redesigns. Hosts that can't be resolved fall back to a `SourceMonogram` tile.
- The icon column answers *where a piece came from*, not what medium it is — medium lives in the filter chips and the `--cat-*` colour on the creator name. Don't mix the two questions in one column.

## Conventions

- Design tokens in `app/globals.css` are stable. Adjust them; don't fight them with per-component overrides.
- Section pages should be just prose inside `<SectionLayout>`. Don't add layout chrome.
- One link style everywhere: ink text with a 1px grey underline, Notion blue on hover (`.page a` in `globals.css`). Buttons that act like links (`.copy-link`, `.feedback-trigger`) share it. Don't add per-component link colours.
- Reach for Notion's own block vocabulary (callout, toggle, inline `code`, properties, sub-page links) before inventing new chrome.
- Monospace is for terminal-flavoured things only: the terminal, the `>_` launcher, `code`, course codes. Prose stays in Inter.
- No all-caps letter-spaced labels, no italic or coloured headings, no Roman numerals. Hierarchy comes from size, weight, and `--muted`.
- The terminal is the one dark surface (`--term-*` tokens). It does not make the site dark-mode.
- Light-mode only. No theme toggle, no `data-theme` switching — the `:root` tokens in `app/globals.css` are the sole palette.
- No code comments unless the *why* is non-obvious. Don't narrate WHAT the code does — well-named identifiers handle that.

## Don't (without asking)

- Replace plain CSS with Tailwind or CSS-in-JS
- Add a third typeface — Inter + JetBrains Mono, on purpose
- Add a state library, CMS, or testing framework. This is a small static portfolio (home + three section pages + `/consumed-content`).
- Add `/consumed-content` to `content/sections.ts`, or link it from anywhere beyond `/education` and the home TL;DR — it is meant to stay out of the nav.
- Hotlink favicons at runtime, or hand-edit the generated `content/favicons.ts`.
- Add a general contact form or bring back a contact page. The anonymous-feedback modal and the click-to-copy email in the home link row are intentional.
- Turn `Topbar` into a nav menu, or split the bio back out into an about page.
- Reintroduce a dark mode or theme toggle — site is intentionally light-only.
- Change `--maxw` (760px, 1000px from 1024px up) casually

## Workflow

- Commit often. After each self-contained change (a copy edit, a component tweak, a CSS adjustment), proactively suggest committing rather than batching many unrelated edits into one commit. Keep commits small and logically scoped with clear messages.
- Never add a `Co-Authored-By: Claude` trailer to a commit in this repo.
- Prefer small commits, but not at the cost of a broken intermediate — if splitting a change would leave a commit that doesn't build or renders wrong, land it as one.

## Routes

`/`, `/experience`, `/projects`, `/education`, `/consumed-content`

## Deploy

Push to `main`. Vercel auto-deploys.
