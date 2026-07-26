# CLAUDE.md

## What this is

Ivan Shishkin's personal portfolio — a UC Irvine CS student site with a typography-forward, Anthropic Claude-inspired editorial aesthetic. Cream paper palette (#fbf6ea bg, rust accent #7a3d1d), Spectral serif body, Inter sans labels, JetBrains Mono counters, single 640px column, numerated sections I–VI.

## Stack

- Next.js 16 (App Router) + React 19 + TypeScript
- Fonts via `next/font/google` exposed as `--ser`, `--sans`, `--mono` in `app/layout.tsx`
- Plain CSS in `app/globals.css` — no Tailwind, no CSS Modules
- Static content modules under `content/` (`sections.ts`, `projects.tsx`, `contacts.ts`, `consumed.ts`). `projects.tsx` because project blurbs accept inline JSX (e.g. cross-link from Construction-Verification into `/experience`)
- Deployed on Vercel

## Architecture

The home page (`app/page.tsx`) is its own composition: hero portrait, bio, principle pull-quote, and the anonymous-feedback modal (`FeedbackForm`, posts to web3forms). Every sub-page is just `<SectionLayout slug="...">prose</SectionLayout>` — `SectionLayout` renders the subnav, section head, children, `Pager`, and footer. `content/sections.ts` is the single source of truth for navigation order, Roman numerals, and section eyebrows.

`/consumed-content` is the one exception. It builds its own shell from `SiteHeader`/`SiteFooter` rather than `SectionLayout`, because `getSection` throws on any slug missing from `sections.ts` — and keeping it out of that file is what keeps it out of the nav, the header menu, and the `Pager`. It is reachable only from the Self-Education link on `/education`, which is deliberate. It is still in `sitemap.xml` and indexable.

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
- Light-mode only. No theme toggle, no `data-theme` switching — the `:root` tokens in `app/globals.css` are the sole palette.
- No code comments unless the *why* is non-obvious. Don't narrate WHAT the code does — well-named identifiers handle that.

## Don't (without asking)

- Replace plain CSS with Tailwind or CSS-in-JS
- Redesign typography — Spectral / Inter / JetBrains Mono are deliberate
- Add a state library, CMS, or testing framework. This is a small static portfolio (home + six section pages + `/consumed-content`).
- Add `/consumed-content` to `content/sections.ts`, or link it from anywhere but `/education` — it is meant to be found only there.
- Hotlink favicons at runtime, or hand-edit the generated `content/favicons.ts`.
- Add a general contact form. The anonymous-feedback modal on home and the click-to-copy email on `/contact` are intentional.
- Reintroduce a dark mode or theme toggle — site is intentionally light-only.
- Widen `--maxw` (640px) or change `--gap` (60px) casually

## Workflow

- Commit often. After each self-contained change (a copy edit, a component tweak, a CSS adjustment), proactively suggest committing rather than batching many unrelated edits into one commit. Keep commits small and logically scoped with clear messages.
- Never add a `Co-Authored-By: Claude` trailer to a commit in this repo.
- Prefer small commits, but not at the cost of a broken intermediate — if splitting a change would leave a commit that doesn't build or renders wrong, land it as one.

## Routes

`/`, `/about`, `/experience`, `/skills`, `/projects`, `/education`, `/contact`, `/consumed-content`

## Deploy

Push to `main`. Vercel auto-deploys.
