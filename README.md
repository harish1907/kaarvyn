# Kaarvyn Woodcraft

Premium dark/gold furniture site — React + Vite, Tailwind v4, GSAP + Lenis smooth scroll, Framer Motion.

## Run it

```bash
npm install
npm run dev
```

## Before going live

1. **Real photos — this is the most important one.** Every photo on the site right now is a free Pexels stock photo standing in for your actual work (almirahs, beds, sofas, wardrobes, gates, the workshop shot) — none of it is really Kaarvyn's. Stock photos are fine for a first preview, but replace them with real project photography before telling customers this is your work. Same filenames, so swapping is a straight drop-in:
   - `src/assets/gallery/almirah/1.jpg 2.jpg 3.jpg`
   - `src/assets/gallery/bed/...`, `sofa/...`, `wardrobe/...`, `gate/...`
   - `src/assets/hero/photo.jpg` — main cinematic hero shot
   - `src/assets/about/workshop.jpg` — workshop/craftsman photo
   The current stock photos are from Pexels (free for commercial use, no attribution required — [license](https://www.pexels.com/license/)), picked to have no visible third-party logos, brand names, or signage. Titles/captions for each gallery photo are in `src/data/gallery.js` — update them to match once you swap in real shots.
2. **Contact details & referral terms** — edit `src/data/site.js`: WhatsApp number, phone, email, location, Instagram, referral commission %.
3. **Copy** — gallery titles/notes live in `src/data/gallery.js`; testimonials in `src/components/Testimonials.jsx`.
4. **Contact form** — no backend required: submitting builds a message from the fields and opens WhatsApp (`src/components/Contact.jsx`). If you'd rather route enquiries to email/a CRM, swap the `handleSubmit` function there for a `fetch()` call to your endpoint (e.g. Formspree).
5. **Theme** — defaults to the dark luxury look; visitors can switch to light via the toggle in the navbar (persisted per-browser, including the hero). Edit the palettes in `src/index.css` (`@theme` block for dark, `:root[data-theme="light"]` for light).

## Build

```bash
npm run build
```

## Deploying to Vercel

No config needed — Vercel auto-detects Vite. Two options:

- **Dashboard**: [vercel.com/new](https://vercel.com/new) → import this project (push it to a GitHub repo first, or use the CLI below) → it will detect "Vite" automatically (build command `npm run build`, output directory `dist`) → Deploy.
- **CLI**: `npx vercel` from this folder (first run links/creates the project and deploys a preview), then `npx vercel --prod` to publish.

The site is a single static page with no environment variables or server required, so there's nothing else to configure.
# kaarvyn
