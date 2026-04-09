// src/data/portfolio.js

export const meta = {
  name: 'Jalen Goines',
  title: 'Engineer & Operator',
  tagline: 'I build systems that scale — then build the teams that run them.',
  email: 'goinesjalen@gmail.com',
  github: 'https://github.com/goinesjalen',
  linkedin: 'https://www.linkedin.com/in/jalen-goines/',
  location: 'Bloomington, IN',
  available: true,
}

export const heroStats = [
  { value: '3M+', label: 'Views Built' },
  { value: '165K', label: 'Subscribers Achieved' },
  { value: '1', label: 'FAANG Internship' },
  { value: '200+', label: 'Weekly Users Supported' },
]

export const about = {
  headline: 'I build solutions to solve real problems.',
  body: [
    'Most people my age are waiting for their career to happen to them. I\'m not. At 24, I\'ve written production code at Google, scaled a YouTube channel to 165K subscribers in nine months, and shipped full-stack website that customers depend on every day.',
    'My edge isn\'t any single skill — it\'s how I think about systems. Whether it\'s engineering a validation engine for optical networks, automating a content pipeline end-to-end, or designing the operational infrastructure for a business, I\'m always asking the same question: what\'s the leverage point?',
    'My long game is leadership — not by title-chasing, but by doing the kind of work that makes people want to hand me the keys.',
  ],
  quote: 'Systems thinking is the difference between solving today\'s problem and building tomorrow\'s solution.',
}

export const projects = [
  {
    id: 'nicoclips',
    title: 'NicoClips',
    subtitle: 'YouTube Automation Platform & Channel',
    year: '2025',
    status: 'Live',
    problem: 'A creator had massive untapped video content but no infrastructure to systematically clip, encode, and distribute it at scale. Manual editing was a bottleneck. The opportunity: build automation that could turn a content backlog into a growth engine.',
    contribution: 'I built NicoClips from zero — not just as a channel, but as an end-to-end content production system. I architected the automation pipeline, directed the creative team, and owned all technical and strategic decisions.',
    decisions: [
      'Chose yt-dlp + FFmpeg over cloud video APIs to eliminate per-minute costs and maintain local processing speed.',
      'Built batch pipelines with queue management to prevent I/O bottlenecks on high-volume encoding runs.',
      'Designed a content scheduling system aligned with platform algorithm windows.',
    ],
    outcomes: [
      '3M+ total views in 9 months',
      '165,000 subscribers from zero',
      'Thousands of dollars in revenue generated',
    ],
    stack: ['Python', 'yt-dlp', 'FFmpeg', 'Batch Processing', 'YouTube API'],
    category: 'Systems / Content / Media',
    accent: 'ember',
  },
  {
    id: 'google-validation',
    title: 'Network Validation Engine',
    subtitle: 'Google — Optical Network Infrastructure',
    year: '2023',
    status: 'Shipped',
    problem: 'Google\'s optical network team had a growing graveyard of legacy validation rules — brittle, hard-coded, untestable. Porting them was manual and error-prone. There was no extensible architecture to add new rules without risking regressions.',
    contribution: 'I designed and built a modular validation engine from the ground up, creating a framework that could ingest legacy rules, validate SQL-defined network models, and be extended without touching core logic.',
    decisions: [
      'Chose a plugin-style modular architecture so individual rules could be registered, tested, and swapped independently.',
      'Built SQL-based validation logic directly against relational database models rather than in-memory — keeping validation close to the source of truth.',
      'Integrated Python automation to orchestrate rule execution and surface structured output.',
    ],
    outcomes: [
      'Reduced rule-porting effort from impossible to days',
      'Created extensible foundation for future validation requirements',
      'Deployed to production infrastructure serving Google\'s network teams',
    ],
    stack: ['Python', 'SQL', 'MariaDB', 'Internal Google Tooling'],
    category: 'Infrastructure / Backend',
    accent: 'ice',
  },
  {
    id: 'enova-config',
    title: 'Internal Config Management App',
    subtitle: 'Enova International — FinTech Infrastructure',
    year: '2023',
    status: 'Shipped',
    problem: 'Non-technical teams at Enova needed to update application configurations — JSON values buried inside deployed services — but every change required an engineer to do a formal release cycle. Slow, expensive, risky.',
    contribution: 'I built a full-stack internal web application that abstracted the complexity of JSON config management into a clean UI. Non-engineers could now make configuration changes safely, without touching code or requiring a deployment.',
    decisions: [
      'Chose Go for the backend — performance and simplicity were prioritized for an internal tool with potentially high usage spikes.',
      'Built role-based access control into the config editing interface to prevent unauthorized changes.',
      'Integrated directly into existing CI/CD pipeline so changes could be applied without manual deployments.',
    ],
    outcomes: [
      'Eliminated engineer time spent on routine config changes',
      'Reduced release cycle overhead for non-technical configuration updates',
      'Adopted across multiple internal teams at Enova',
    ],
    stack: ['Go', 'Docker', 'CI/CD', 'JSON', 'Internal APIs'],
    category: 'Full-Stack / DevOps',
    accent: 'gold',
  },
  {
    id: 'barbershop',
    title: 'Barbershop Web Platform',
    subtitle: 'Freelance — Local Business',
    year: '2022',
    status: 'Live',
    problem: 'A local barbershop had no web presence, losing customers to businesses that were easier to find, book, and trust online.',
    contribution: 'Designed and developed a full-stack website end-to-end — from design decisions to deployment. Owned the entire client relationship, scope, and delivery.',
    decisions: [
      'Prioritized load performance above all — slow sites kill local business conversions.',
      'Built mobile-first since the majority of local discovery traffic is mobile.',
    ],
    outcomes: [
      '200+ weekly active users',
      'First professional web presence for the business',
      'Measurable increase in online booking and discoverability',
    ],
    stack: ['HTML', 'CSS', 'JavaScript'],
    category: 'Web / Client',
    accent: 'mist',
  },
]

export const experience = [
  {
    id: 'nicoclips-exp',
    company: 'NicoClips & Nico (YouTube)',
    role: 'Channel Manager & Director of Production',
    period: 'Feb 2025 — Present',
    type: 'Operator',
    summary: 'Built a media company from the ground up. Not just a channel — a production system, a team, and a distribution engine. Every decision from tooling to team structure to publishing cadence was mine to make and mine to own.',
    highlights: [
      'Scaled channel from 0 to 165K subscribers and 3M+ views in under 9 months.',
      'Engineered a Python automation stack (yt-dlp + FFmpeg) that eliminated most of the manual editing bottleneck.',
      'Directed a cross-functional team of thumbnail artists, creative strategists, and video directors.',
      'Owned all technical infrastructure and production decisions end-to-end.',
    ],
  },
  {
    id: 'google',
    company: 'Google',
    role: 'Software Engineering Intern',
    period: 'Fall 2023',
    type: 'Engineering',
    summary: 'Worked on infrastructure that sits beneath Google\'s optical networking layer. Built systems designed to last — not intern projects tucked away in a corner, but production-grade code that engineers would extend long after the internship ended.',
    highlights: [
      'Designed a modular validation engine to port legacy rules with zero regression risk.',
      'Built SQL-based validation logic for optical network models — integrating tightly with relational database infrastructure.',
      'Shipped production code that went into real Google systems.',
    ],
  },
  {
    id: 'enova',
    company: 'Enova International',
    role: 'Software Engineering Intern',
    period: 'Summer 2023',
    type: 'Engineering',
    summary: 'Built an internal tool that non-technical employees actually used to do their jobs better. Shipped it through proper CI/CD, learned what \'production\' really means, and left behind something that saved real engineering hours.',
    highlights: [
      'Full-stack internal web app in Go, giving non-engineers control over JSON app configurations.',
      'Integrated Docker, CI/CD pipelines, and Agile workflows — ran iterative deployment cycles start to finish.',
      'Solved a genuine operational bottleneck, not a made-up intern assignment.',
    ],
  },
  {
    id: 'freelance',
    company: 'Freelance',
    role: 'Web Designer & Developer',
    period: '2022',
    type: 'Client',
    summary: 'My first taste of the full ownership loop — client, scope, build, ship. I found the problem, quoted the work, built the thing, and watched real people use it.',
    highlights: [
      'Designed and developed a barbershop web platform averaging 200+ weekly users.',
      'Managed the client relationship, technical execution, and delivery solo.',
    ],
  },
]

export const skills = {
  backend: ['Go', 'Python', 'Java', 'C', 'SQL', 'MariaDB', 'MySQL'],
  frontend: ['Vue 3', 'React', 'JavaScript', 'HTML', 'CSS', 'Tailwind'],
  systems: ['Docker', 'CI/CD', 'FFmpeg', 'yt-dlp', 'Batch Processing', 'Unix'],
  tools: ['Git', 'Adobe Photoshop', 'Adobe InDesign', 'Canva', 'Excel'],
  leadership: ['Cross-functional team direction', 'Technical decision ownership', 'Client relationship management', 'Production system design'],
}

export const ticker = [
  'SYSTEMS THINKER',
  'FULL-STACK ENGINEER',
  'TEAM OPERATOR',
  'GOOGLE ALUMNUS',
  'CONTENT ARCHITECT',
  'BUILDER FIRST',
  'FUTURE CTO',
  'INDIANA UNIVERSITY',
]

export const futureProjects = [
  {
    title: 'Analytics Dashboard (NicoClips)',
    why: 'Shows you can turn your own data into business intelligence. Builds on existing work and demonstrates data engineering.',
    tech: 'Python + FastAPI backend, Vue 3 frontend, YouTube Data API, PostgreSQL',
  },
  {
    title: 'Open Source CLI Tool',
    why: 'A well-maintained CLI tool with real GitHub stars signals technical credibility and community standing.',
    tech: 'Go or Rust — both signal serious engineering intent',
  },
  {
    title: 'SaaS Side Product',
    why: 'Nothing proves business and engineering alignment like shipping a product people pay for. Even $1 of MRR matters.',
    tech: 'Stack of your choice — but ship it and charge for it',
  },
  {
    title: 'Engineering Blog',
    why: 'Writing about technical decisions positions you as a thought leader. \'I wrote about why I chose Go\' is more compelling than a resume bullet.',
    tech: 'Astro or Nuxt Content — keeps it in your Vue/JS ecosystem',
  },
]
