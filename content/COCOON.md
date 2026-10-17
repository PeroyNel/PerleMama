# PerleMama topic cocoon

One URL per search intent. Service modes = pillars. Problems = spokes. Blog = educational depth that links into spokes.

**Do not** add thin keyword doorways such as `/breastfeeding-help-stellenbosch/` when `/` and `/stellenbosch-clinic/` already target that intent — that splits ranking signals and looks like doorway spam. Put town names on the real service pages; use the blog for guides (e.g. “where to start in Stellenbosch”) that link to those pages.

Area names live on the home-visit / clinic pages — not one thin URL per suburb.

| Role | Target keyword | Path (EN) | Path (AF) |
| --- | --- | --- | --- |
| Pillar | breastfeeding help Stellenbosch | `/` | `/af/` |
| Pillar | breastfeeding help at home Western Cape | `/home-visits/` | `/af/huisbesoeke/` |
| Pillar | online breastfeeding consultation South Africa | `/online-consultation/` | `/af/aanlyn-konsultasie/` |
| Pillar | breastfeeding consultant Stellenbosch | `/stellenbosch-clinic/` | `/af/stellenbosch-kliniek/` |
| Spoke | painful latch / sore nipples | `/painful-latch/` | `/af/seer-tepels/` |
| Spoke | low milk supply | `/low-milk-supply/` | `/af/lae-melkvoorraad/` |
| Spoke | mastitis / blocked ducts | `/mastitis/` | `/af/mastitis/` |
| Spoke | tongue-tie feeding | `/tongue-tie/` | `/af/tongbandjie/` |
| Spoke | returning to work pumping | `/returning-to-work-pumping/` | `/af/terug-werk-toe/` |
| Spoke | newborn weight gain | `/newborn-weight-gain/` | `/af/baba-gewig/` |

## Link rules

- Every problem page ends with book CTA → three service pages + WhatsApp
- Every service page links to top problem spokes
- Home links to all services and help topics
- No orphans after publish
- hreflang on every EN↔AF pair

## Publish order

1. Core EN services + home + about + book (shipped in site build)
2. AF mirrors (shipped)
3. Problem pairs (shipped v1; rewrite from GSC / Planner)
4. Blog articles under `/blog/` (shipped starter set; add ~1 every 1–2 weeks)
5. Extras later: reflux/allergy, DMER, weaning, prenatal class, medical aid FAQ

## Blog

| Article | Path |
| --- | --- |
| Mastitis protocol update | `/blog/mastitis-protocol-update/` |
| Pump flange fit | `/blog/pumping-flange-fit/` |
| Borsvoeding hulp Stellenbosch gids | `/blog/borsvoeding-hulp-stellenbosch-gids/` |

Add new posts in `src/data/blog.js`.