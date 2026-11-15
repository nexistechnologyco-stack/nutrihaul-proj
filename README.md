# NutriHaul — premium frontend concept

Static, frontend-only site (HTML, CSS, JS). No backend, checkout or database.
Creative direction and development by Nexis Technology.

## Run locally
`npx serve .` then open http://localhost:3000

## Structure
- `index.html` — page markup
- `css/styles.css` — design system and layout
- `js/main.js` — GSAP / ScrollTrigger / Lenis animation and the Three.js capsule scene
- `assets/img/` — product and lifestyle images (replace files with originals, keep names)

## Deploy
Any static host. `vercel.json` sets caching and security headers for Vercel.

## Notes
- GSAP, Lenis and Three.js load from pinned CDN versions.
- Placeholders still to replace: reviews, founder story, blog articles.
- Several supporting images are ~600 px; swap in high-resolution originals.
