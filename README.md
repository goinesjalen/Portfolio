# Jalen — Portfolio

A production-ready Vue 3 portfolio. Minimalist-premium aesthetic. Dark mode. No template vibes.

---

## Stack

- **Vue 3** (Composition API throughout)
- **Vite** (sub-4s builds)
- **TailwindCSS** (utility-first, extended design tokens)
- **Google Fonts** — Bebas Neue, DM Serif Display, IBM Plex Mono, Outfit

---

## Local Development

```bash
# Install dependencies
npm install

# Start dev server (hot reload)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

Dev server runs at `http://localhost:5173`

---

## Project Structure

```
src/
├── components/
│   ├── Navbar.vue        # Fixed nav, scroll-aware, mobile drawer
│   ├── Hero.vue          # Full-viewport hero, stats, ticker tape
│   ├── About.vue         # Credentials grid, narrative, quote
│   ├── ProjectCard.vue   # Expandable card with problem/decisions/outcomes
│   ├── Projects.vue      # Project grid + roadmap section
│   ├── Experience.vue    # Timeline layout, education block
│   ├── Skills.vue        # Categorized tags, leadership signals
│   └── Footer.vue        # CTA, social links
├── composables/
│   └── useReveal.js      # IntersectionObserver scroll reveal
├── data/
│   └── portfolio.js      # ALL content lives here — edit this file
├── App.vue               # Root, custom cursor, layout
├── main.js
└── style.css             # Global styles, animations, CSS variables
```

Built with zero unnecessary dependencies. Vue 3 + Vite + Tailwind — that's it.
