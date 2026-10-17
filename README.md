# PerleMama Lactation

Bilingual (EN/AF) website for Annette Nel, LC (CBI) — Stellenbosch breastfeeding support.

**Canonical domain:** https://perlemamalactation.co.za

## Commands

```bash
npm install
npm run dev
npm run build    # vite + static HTML for every SEO page
npm run preview
```

## SEO ops

- [SEO.md](./SEO.md) — GBP, GSC, GA4, DNS checklist
- [content/COCOON.md](./content/COCOON.md) — URL / keyword map
- [content/KEYWORDS.md](./content/KEYWORDS.md) — Keyword Planner seeds
- [content/AI_VISIBILITY.md](./content/AI_VISIBILITY.md) — monthly GEO prompts
- [content/GSC_REWRITE_LOOP.md](./content/GSC_REWRITE_LOOP.md) — biweekly rewrites
- [content/OUTREACH.md](./content/OUTREACH.md) — referrals & directories

## Content source

All page copy lives in [`src/data/pages.js`](./src/data/pages.js). Edit there, then rebuild.

## Stack

Vite + React + React Router. Post-build [`scripts/generate-static.mjs`](./scripts/generate-static.mjs) writes crawlable HTML (meta, hreflang, JSON-LD, body) for each route into `dist/`.
