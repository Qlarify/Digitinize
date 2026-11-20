# Task 04 — Digitinize website revamp (branch glm/website-revamp)

Progress file lives here (worktree root) per 00-COMMON fallback: the shared
`/Users/zeeshan/Projects/digitinize-website/.glm-round/progress/` path is outside this
worktree and writes there are refused by the harness. This file is committed with the branch.

Preview link: pending first push (Vercel preview; will fetch via gh api after push).

## Design direction (written before building, per task file)
Positioning: "the hospital video studio" — a national-leader production house, not an agency. Buyer = hospital marketing head; needs cinema-grade craft + clinical trust.

- **Palette** (named): Cinema Ink `#0A0F24` (near-black blue, hero + work wall + end card), Brand Navy `#0E1A4F` (kept from brand), Clinical Light `#F4F6FA` (cool light sections — deliberately NOT warm cream), Signal Teal `#0D8080` on light / `#6ED6D2` on dark (single accent family), REC Red `#E5484D` (only the recording dot — semantic, never decoration), hairlines `#DFE3EC` light / `rgba(255,255,255,.12)` dark.
- **Type**: Fraunces (display, opsz 96–144, 650/800) — kept, it is editorial-cinema and already brand; body switched Inter → **Instrument Sans** (clean grotesque, not the default Inter); timecode/labels = ui-monospace stack (semantic video vernacular only).
- **Layout concept**: the page reads like a screening. 1) Full-bleed dark cinematic hero — headline as a film title card bottom-left, a refined "edit monitor" (16:9 frame, timecode, REC dot, lower-third, subtitle line) right; one orchestrated load reveal. 2) Proof strip on dark (stats + client names): the first screen is one continuous cinema statement. 3) Light clinical middle: specialties, process (numbered — it IS a sequence), plans, FAQ — calm, editorial, generous whitespace, NO card-grid sameness (that is what made the old site read "small agency"). 4) Work wall back on dark: work shown as large 16:9 FRAMES (aspect-ratio boxes, lower-third captions, play affordance + subtle scale on hover) instead of text cards. 5) Dark contact end-card.
- **Signature device**: edit-suite vernacular as structure — timecode, REC dot, safe-area corner brackets, subtitle line. Each encodes real meaning (this is video), used sparingly.
- **Motion**: one hero entrance (staggered ~500 ms, reduced-motion respected); hover scale/caption on work frames; sticky header hairline. NO fade-up on every section, NO gradient washes, NO '→' on links, no ALL-CAPS eyebrow above every heading (most eyebrows cut).
- **Copy**: keep every fact already on main (his 14-11 answers): since 2014, Manipal since 2017, 13 units, 50,000+ videos, 10+ languages, 12 videographers, 2-working-day first cut, 3 revision rounds, travel at actual cost, client names allowed (D-0120). Add the offer ladder from the GTM: Content Day pilot → monthly plan → rate contract (client-safe wording, no prices).
- **Anti-default check** (skill pass): not cream+terracotta, not black+acid-green, not broadsheet; SaaS-card kit removed in light sections (list/rule layouts instead); eyebrows mostly cut; 2 type families + system mono; one bold thing (the hero monitor), everything else quiet.

## Reddit research used (20-11-2026)
- r/web_design 1gqbtli: the work is the engagement; design complements it, parallax/3D = noise; model-agency sites = stylish without gimmicks; separate sections per audience; case-study context builds trust.
- r/videography wfn6y3: simple + confident wins; large visual instant-read presentation; subtle cursor/hover interactions praised; reel ≤ ~90 s.
- r/Filmmakers 1tpeslx: case study = brief → approach → role → result; niche clarity beats everything.

## Decisions I took
- 22:05 IST 20-11-2026: Kept the facts on origin/main (50,000+ videos, 2-day first cut, client names) over the task file's older 03-10 counts (~1,100) — main's facts are Zeeshan's own 14-11 answers (commit 28e92f8), later than 03-10. The task file's "no turnaround number" is overridden by his published 2-day answer already live on main. Logged for the Saturday review.
- 22:05 IST 20-11-2026: body type Inter → Instrument Sans (distinctive, still clean + client-safe). Fraunces kept.
- 22:05 IST 20-11-2026: no hero video asset exists and none may be signed up for; the hero stays a crafted CSS "edit monitor" (real content: lower-third, subtitle, timecode) — a real showreel swaps in later behind the same frame.
- 22:10 IST 20-11-2026: no `hallmark` skill (its own rule: not on an existing design unless named). Used frontend-design principles; polish verified by measurement (GLM cannot see images).

## Done
- 21:50 IST 20-11-2026: worktree entered (branch glm/website-revamp cut from origin/main 9775b8d), research done, design direction above.

## Next
- Build pass 1: tokens + header + hero + proof strip (dark cinematic), commit + push, fetch the Vercel preview URL.

## Blocked
- Real showreel / stills from client work: needs his permission ask (GTM decision 5) — placeholder frames meanwhile, marked like the existing BLANK pattern.
