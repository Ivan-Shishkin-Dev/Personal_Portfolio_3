# Personal Portfolio

Personal portfolio for Ivan Shishkin. Live at https://ivanshishkin.com.

## Stack

- Next.js 16 (App Router), React 19, TypeScript
- `next/font/google` — Spectral, Inter, JetBrains Mono
- Plain CSS in `app/globals.css`
- Vercel hosting

## Develop

```
npm install
npm run dev      # http://localhost:3000
npm run build
npm start
```

## Deploy

Push to `main`. Vercel auto-deploys.

## Edit content

- Section copy (prose) — `app/<slug>/page.tsx`
- Section order, numerals, Contents-list descriptions — `content/sections.ts`
- Project entries — `content/projects.tsx` (blurbs accept inline JSX so prose can carry links)
- Contact rows — `content/contacts.ts`

## Design system

Tokens live in `app/globals.css` under `:root` and `html[data-theme="dark"]`. Adjust the tokens; don't override per component.
