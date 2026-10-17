# SEO & analytics setup (PerleMama Lactation)

Canonical site: `https://perlemamalactation.co.za`

Ops after go-live:

- Biweekly GSC rewrites → [content/GSC_REWRITE_LOOP.md](./content/GSC_REWRITE_LOOP.md)
- Monthly AI citation checks → [content/AI_VISIBILITY.md](./content/AI_VISIBILITY.md)
- Referral / directory → [content/OUTREACH.md](./content/OUTREACH.md)
- Topic map → [content/COCOON.md](./content/COCOON.md)

## Phase 0 checklist (owner — manual)

### Domain & DNS

- [ ] Register `perlemamalactation.co.za` if still NXDOMAIN
- [ ] Point DNS (Cloudflare recommended) → GitHub Pages / Cloudflare Pages per deploy workflow
- [ ] Confirm `https://perlemamalactation.co.za` returns **200**
- [ ] Optional later: redirect `perlemama.co.za` → canonical (do not run two live sites)

### Google Business Profile (this week)

- [ ] Claim / optimize GBP as **hybrid**: service-area (Stellenbosch, Helderberg, Paarl/Franschhoek corridor) **plus** Stellenbosch home-office address if clients visit
- [ ] Primary category: closest match to Lactation Consultant / Breastfeeding support
- [ ] Services: Home visit, Online consult, In-person Stellenbosch, Prenatal prep
- [ ] NAP matches site footer: Annette Nel / PerleMama Lactation, Stellenbosch, **076 183 6080**
- [ ] Website field → `https://perlemamalactation.co.za`
- [ ] Photos (Annette, space, area — no client babies without consent)
- [ ] Review ask via WhatsApp after each consult (EN or AF)
- [ ] Weekly Google posts from education content + UTM to service/problem URLs

### Keyword Planner

- [ ] Run seeds in [content/KEYWORDS.md](./content/KEYWORDS.md) with location **Western Cape**, then **South Africa** for online terms
- [ ] Export CSV into `content/keyword-planner/` (do not invent volumes)
- [ ] Re-order problem-page publish queue before page #3 if volumes disagree

### Google Search Console

1. Add **Domain** property for `perlemamalactation.co.za` (or URL-prefix if needed)
2. Verify (DNS TXT or HTML file in `public/`)
3. Submit sitemap: `https://perlemamalactation.co.za/sitemap.xml`
4. URL Inspection → home + three service pages → Request indexing

### Google Analytics 4

1. Create GA4 property **PerleMama Lactation**
2. Web stream → Measurement ID `G-XXXXXXXX`
3. Add to site when ready (gtag in `index.html` or env-driven loader)
4. Mark WhatsApp clicks (`data-analytics="whatsapp_click"`) as events
5. Link GA4 ↔ Search Console

## Post-deploy checks

1. `robots.txt`, `sitemap.xml`, `llms.txt` return 200
2. View-source on `/home-visits/` shows `<h1>` and meta description (static HTML)
3. [Rich Results Test](https://search.google.com/test/rich-results) on home + one problem page
4. Facebook Sharing Debugger on home URL
5. hreflang: EN ↔ AF pairs in page source
