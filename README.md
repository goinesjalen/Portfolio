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

---

## Updating Content

**All content is in one file: `src/data/portfolio.js`**

- Update `meta` → your name, email, GitHub, LinkedIn
- Update `projects` → add/remove/edit project objects
- Update `experience` → job history
- Update `skills` → your actual skill set
- Update `heroStats` → numbers that represent you

Each project follows this shape:
```js
{
  id: 'unique-id',
  title: 'Project Name',
  subtitle: 'Company / Context',
  year: '2024',
  status: 'Live' | 'Shipped' | 'In Progress',
  problem: 'What was broken and why it mattered.',
  contribution: 'What you specifically did.',
  decisions: ['Decision 1', 'Decision 2'],
  outcomes: ['Outcome 1', 'Outcome 2'],
  stack: ['Tech', 'Stack', 'Here'],
  category: 'Backend / Infrastructure',
  accent: 'gold' | 'ember' | 'ice' | 'mist',
}
```

---

## Design Tokens

Edit `tailwind.config.js` to change the color palette or fonts:

```js
colors: {
  ink: '#0a0a0a',       // primary background
  paper: '#f4f0e8',     // primary text
  ash: '#1a1a1a',       // card backgrounds
  smoke: '#2a2a2a',     // borders
  mist: '#888888',      // secondary text
  gold: '#c9a84c',      // primary accent
  ember: '#e05c2a',     // secondary accent
  ice: '#a8c4d4',       // tertiary accent
}
```

---

## Deployment

### Vercel (recommended — free, zero config)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy from project root
vercel

# Follow prompts — framework auto-detected as Vite
```

Or connect your GitHub repo at vercel.com → New Project → Import → Done.

**Custom domain on Vercel:**
1. Project Settings → Domains → Add Domain
2. Add your domain (e.g. `jalenbuilds.com`)
3. Update your DNS registrar (GoDaddy/Namecheap/Cloudflare):
   - Add a CNAME record: `www` → `cname.vercel-dns.com`
   - Add an A record: `@` → `76.76.21.21`
4. Vercel handles SSL automatically.

### Netlify (alternative)

```bash
npm run build
# Drag the /dist folder to netlify.com/drop
```

Or: Connect GitHub repo at netlify.com → New site from Git → Build command: `npm run build` → Publish dir: `dist`

---

## Features to Add Next

| Feature | Complexity | Impact |
|---|---|---|
| Blog (Markdown posts via Vite) | Medium | High — builds thought leadership |
| Analytics dashboard (your YouTube data) | High | High — shows data engineering |
| Dark/light toggle | Low | Medium |
| Resume PDF download button | Low | Medium |
| Project filter by category | Low | Medium |
| Contact form (Formspree or Resend) | Low | High |
| Case study pages (router + `/projects/:id`) | Medium | High |
| OpenGraph meta tags | Low | Medium — social sharing |

---

## Customization Notes

- **Cursor** — Custom gold dot + ring cursor in `App.vue`. Disable on touch devices by adding `@media (pointer: coarse)` CSS.
- **Ticker speed** — Adjust `animation: ticker 20s` duration in `style.css`
- **Scroll reveal** — Delay classes (`reveal-delay-1` through `reveal-delay-4`) control stagger timing
- **Fonts** — Loaded from Google Fonts in `index.html`. Swap freely in `tailwind.config.js`

---

Built with zero unnecessary dependencies. Vue 3 + Vite + Tailwind — that's it.
