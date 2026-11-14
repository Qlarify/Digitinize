# digitinize-website

Static site for Digitinize Creative (video production for hospitals). No build step: `index.html`, `styles.css`, `site.js`, `images/`.
Hosted on Vercel (project behind https://digitinize.vercel.app); `vercel.json` holds clean URLs, redirects from the old pages and headers.

Local preview: `python3 -m http.server 8790` in this folder, then open http://127.0.0.1:8790/.

Blanks: 11 facts still to come from Zeeshan. Each sits behind a `<!-- BLANK-n … -->` comment and a `data-blank="…"` attribute in `index.html`: either the element is `hidden` until filled, or it shows neutral wording with no number. `grep -n BLANK- index.html` lists them; the comment says how to restore each one.
Rule: no AI / model / vendor / tool names anywhere on the site.
