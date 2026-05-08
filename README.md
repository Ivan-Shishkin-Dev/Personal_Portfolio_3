# Personal Portfolio

Personal portfolio for Ivan Shishkin. Live at https://example.com (set me).

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
- Portrait photos — drop `portrait-1.jpg` … `portrait-4.jpg` into `public/portraits/`. Captions and dates live in `content/portraits.ts`
- Sparkline data — `content/sparks.ts`
- Project entries — `content/projects.ts`

## Design system

Tokens live in `app/globals.css` under `:root` and `html[data-theme="dark"]`. Adjust the tokens; don't override per component.
