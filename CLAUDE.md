# CLAUDE.md

## What this is

Ivan Shishkin's personal portfolio — a UC Irvine CS student site in a plain, Notion-style layout: one column of prose, sentence-case headings, underlined links. Cream page (`--bg` #f5efe2), ink text, and a rust accent (#7a3d1d) that appears only on hover and focus. Spectral is the only typeface.

## Stack

- Next.js 16 (App Router) + React 19 + TypeScript
- Spectral via `next/font/google`, exposed as `--ser` in `app/layout.tsx`
- Plain CSS in `app/globals.css` — no Tailwind, no CSS Modules
- Static content modules under `content/` (`sections.ts`, `projects.tsx`, `contacts.ts`, `consumed.ts`). `projects.tsx` because project blurbs accept inline JSX (e.g. cross-link from Construction-Verification into `/experience`)
- Deployed on Vercel

## Architecture

The home page (`app/page.tsx`) is the merged home + about: a header with the round headshot beside the name and a link row, then the bio as prose. The link row reads from `content/contacts.ts` — an entry with `copy` renders as a click-to-copy button (`CopyLink`), the rest as external links — followed by the anonymous-feedback modal trigger (`FeedbackForm`, posts to web3forms).

Every sub-page is just `<SectionLayout slug="...">prose</SectionLayout>`. `SectionLayout` renders `PageHead` (a back link to home, the title, and the section's one-line `eyebrow` as a subtitle), the children, `SiteNav`, and `SiteFooter`. `content/sections.ts` is the single source of truth for navigation order and those subtitles.

Navigation lives at the bottom of every page. `SiteNav` is a plain link row; sub-pages get a Home link in it, the home page does not. There is no top bar — on sub-pages the back link in `PageHead` is the way home.

`/consumed-content` is the one exception. It composes `PageHead`/`SiteNav`/`SiteFooter` itself rather than using `SectionLayout`, because `getSection` throws on any slug missing from `sections.ts` — and keeping it out of that file is what keeps it out of the nav. It is reachable only from the Self-Education link on `/education`, which is deliberate. It is still in `sitemap.xml` and indexable.

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
- One link style everywhere: ink text with a hairline underline, rust on hover (`.page a` in `globals.css`). Buttons that act like links (`.copy-link`, `.feedback-trigger`) share it. Don't add per-component link colours.
- No all-caps letter-spaced labels, no italic or coloured headings, no Roman numerals. Hierarchy comes from size, weight, and `--muted`.
- Light-mode only. No theme toggle, no `data-theme` switching — the `:root` tokens in `app/globals.css` are the sole palette.
- No code comments unless the *why* is non-obvious. Don't narrate WHAT the code does — well-named identifiers handle that.

## Don't (without asking)

- Replace plain CSS with Tailwind or CSS-in-JS
- Add a second typeface — the site is Spectral only, on purpose
- Add a state library, CMS, or testing framework. This is a small static portfolio (home + three section pages + `/consumed-content`).
- Add `/consumed-content` to `content/sections.ts`, or link it from anywhere but `/education` — it is meant to be found only there.
- Hotlink favicons at runtime, or hand-edit the generated `content/favicons.ts`.
- Add a general contact form or bring back a contact page. The anonymous-feedback modal and the click-to-copy email in the home link row are intentional.
- Bring back a top nav bar, or split the bio back out into an about page.
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
