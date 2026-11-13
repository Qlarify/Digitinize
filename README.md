# digitinize-website

Static site for Digitinize Creative (video production for hospitals). No build step: `index.html`, `styles.css`, `site.js`, `images/`.
Hosted on Vercel (project behind https://digitinize.vercel.app); `vercel.json` holds clean URLs, redirects from the old pages and headers.

Local preview: `python3 -m http.server 8790` in this folder, then open http://127.0.0.1:8790/.

Before launch: every `<span class="ph">` in `index.html` is a placeholder (yellow, dashed outline) — confirm or replace it, then delete the `.ph` styling.
Rule: no AI / model / vendor / tool names anywhere on the site.
