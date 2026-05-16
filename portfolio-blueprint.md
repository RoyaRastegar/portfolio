# Project: Developer Portfolio with Live Code Playground
### Complete Blueprint — Personalized for Roya RastegarKangacher
**FullStack Developer | React.js | Node.js | Kuala Lumpur, Malaysia**

---

# TABLE OF CONTENTS

1. [Project Overview](#overview)
2. [Full Feature List](#features)
3. [UI Design System](#design)
4. [Page-by-Page Content Plan](#content)
5. [Flow Analysis](#flow)
6. [Tech Stack & Tools](#stack)
7. [Mobile Responsiveness Strategy](#mobile)
8. [Step-by-Step Build Plan](#plan)
9. [Deployment Guide](#deploy)

---

---

## 1. PROJECT OVERVIEW {#overview}

**What it is:** A personal developer portfolio website for Roya RastegarKangacher — a fullstack developer with 6+ years of React/TypeScript expertise. The site showcases her experience, skills, and projects, and features a live embedded code playground where visitors can run React snippets directly in the browser.

**Who sees it:** Recruiters, hiring managers, CTOs at product companies, freelance clients. They spend ~60 seconds before deciding to reach out. The site must communicate seniority, technical depth, and personality instantly.

**What makes it unforgettable:** The live code playground — visitors can interact with real React code written by Roya. No other portfolio on a recruiter's shortlist will have this. It turns a passive resume into a live technical demo.

**Tone:** Dark, precise, editorial. Confident. Not flashy — authoritative.

---

---

## 2. FULL FEATURE LIST {#features}

### Navigation & Shell
- Sticky top navigation bar with smooth scroll to sections
- Logo / name on left, nav links on right
- Active section highlighting as user scrolls
- Mobile hamburger menu with full-screen overlay
- Dark/Light mode toggle (default: dark)
- "Download CV" button in nav (links to PDF)
- Scroll progress bar at top of page

### Hero Section
- Animated greeting: "Hi, I'm Roya." with typewriter effect
- Headline: "FullStack Developer — React & TypeScript Specialist"
- Subheadline: short punchy bio pulled from CV summary
- CTA buttons: "View My Work" + "Contact Me"
- Floating skill tags orbiting or staggered behind the hero text (React, TypeScript, Node.js, etc.)
- Subtle animated background: slow-moving geometric grid or code rain

### About Me Section
- Professional photo (placeholder with avatar fallback)
- Two-column layout: photo left, text right
- Bio paragraph (personalized from CV)
- Location badge: 📍 Kuala Lumpur, Malaysia
- "Open to opportunities" status badge (toggleable via config)
- Key stats row: 6+ Years Experience | 4 Companies | 3 Countries | 10+ Projects
- Quick fact chips: React specialist, Agile/Scrum, Micro-frontend, CI/CD

### Skills Section
- Grouped by category (not a flat list):
  - **Frontend:** React.js, Next.js, TypeScript, JavaScript ES6+, Redux Toolkit, RTK Query, React Router, React Hooks
  - **Backend:** Node.js, Express.js, REST API
  - **Architecture:** Micro-frontend, Component Architecture, State Management, Dynamic Forms, Multi-step Workflows
  - **Styling & UI:** Tailwind CSS, Material UI, HTML5, CSS3, Responsive Design
  - **Tools:** Git, GitHub Actions CI/CD, Agile/Scrum, Jira, Vite
  - **Testing:** Manual Testing, Bug Fixing, API Error Handling, Performance Optimization
  - **Databases:** MySQL, PostgreSQL
- Animated skill bars or pill tags with hover glow
- Proficiency level tags: Expert / Proficient / Familiar

### Experience Section (Timeline)
- Vertical timeline, alternating left/right on desktop, single column on mobile
- Each entry has: role, company, location, dates, tech stack chips, bullet points
- Expandable bullets (collapsed by default, "Show more" toggle)
- Company logo placeholder or colored icon

**Timeline entries (from CV):**

| # | Role | Company | Period |
|---|------|---------|--------|
| 1 | Fullstack Developer | Tentacle \| Etiqa Insurance & Takaful, KL | Feb 2025 – Feb 2026 |
| 2 | Mid-level Frontend Developer | Freelancer, KL | Oct 2022 – Oct 2024 |
| 3 | Mid-Level React Developer | PND, Texas USA (Remote) | Oct 2021 – Oct 2022 |
| 4 | Junior React Frontend Developer | Hamrasta, Tehran, Iran | Apr 2019 – Oct 2021 |
| 5 | Junior Fullstack Developer | Baharan, Tehran, Iran | Apr 2018 – Apr 2019 |

### Projects Section
- 2-column card grid (1 column on mobile)
- Each card: project name, short description, tech stack tags, live demo link, GitHub link
- "Featured" badge on top 2 projects
- Hover: card lifts with shadow + subtle overlay showing quick description
- Filter tabs: All | Frontend | Fullstack | Backend
- Animate cards in on scroll (stagger)

**Projects to include (from CV + portfolio projects):**
1. Commercial Vehicle Insurance Platform (Tentacle/Etiqa) — Micro-frontend, React, TypeScript, Vite
2. Online Shopping Platform — React, Redux, product listing + cart
3. Online Car Rental App — React, booking flow, responsive UI
4. Pet Owners Management App — React, data management workflows
5. Wallet Application (PND) — React, Redux, financial UI
6. Healthcare Web App (PND) — React, feature maintenance
7. Government Payment Forms (Hamrasta) — React, Redux, 12 services
8. Online Exam Platform (Baharan) — Angular, Java Spring, PostgreSQL
9. Real-Time Chat App *(portfolio project 6)* — React, Socket.io, Node.js
10. Auth-Protected Notes App *(portfolio project 7)* — React, JWT, MongoDB
11. E-Commerce Checkout *(portfolio project 9)* — React, Stripe, Node.js

### Live Code Playground Section
- Embedded Monaco Editor (same editor as VS Code)
- Sandpack (by CodeSandbox) for React execution environment
- Pre-loaded with 3–5 curated React snippets written by Roya:
  - "Dynamic Form Engine" (showcasing her specialty)
  - "Multi-step Wizard with State Persistence"
  - "RTK Query Data Fetching Pattern"
  - "Custom useDebounce Hook"
  - "Micro-frontend Shell Example"
- Snippet selector dropdown (switch between demos)
- Split view: code editor (left) + live preview (right)
- "Reset" button, "Copy Code" button
- Mobile: stacked (editor above, preview below)
- Label: "Real patterns from my production work"

### Education & Certifications Section
- Education card: Bachelor in Computer Software Engineering, Islamic Azad University of Lahijan, 2009–2013
- Certification cards (3):
  - The Ultimate React Course 2023 — Udemy, Sep 2023
  - HTML, CSS & JavaScript for Beginners — Udemy, Sep 2023
  - JavaScript 2023: Zero to Expert — Udemy, Nov 2023
- Each cert has icon, name, issuer, date

### Contact Section
- Heading: "Let's Build Something Together"
- Contact form: Name, Email, Subject, Message + Send button
- Backend: Node.js/Express endpoint or EmailJS (no backend needed)
- Contact info cards:
  - 📧 Roya.rastegar54196@gmail.com
  - 📱 (+60) 113-5454-196
  - 🌍 Kuala Lumpur, Malaysia
  - 🐙 github.com/RoyaRastegar
  - 💼 linkedin.com/in/roya-rastegar
- "Available for freelance & full-time roles" status line

### Footer
- Name + tagline
- Social icon links
- "Built with React & ❤️ by Roya" credit
- Back to top button

---

---

## 3. UI DESIGN SYSTEM {#design}

### Aesthetic Direction
**Dark editorial / precision engineering.** Think a senior developer's personal brand — not flashy, not corporate. Deep navy-black background, sharp monospace accents, a single electric accent color that feels intentional. The vibe: someone who writes clean code and has exquisite taste. Zero clutter. Every element earns its place.

The differentiator: the layout has intentional asymmetry. Section numbers shown large and faded (01, 02, 03) as background typography. The grid occasionally breaks — a photo that bleeds past its column, a title that overflows its container by one word.

### Color Palette
```css
:root {
  /* Base */
  --color-bg-base:        #080C14;  /* near-black navy */
  --color-bg-surface:     #0E1420;  /* card backgrounds */
  --color-bg-elevated:    #141B2D;  /* modals, dropdowns */
  --color-bg-highlight:   #1A2235;  /* hover states */

  /* Border */
  --color-border:         #1E2A40;  /* subtle dividers */
  --color-border-bright:  #2A3A58;  /* card borders */

  /* Accent — Electric Cyan */
  --color-accent:         #38BDF8;  /* primary interactive */
  --color-accent-glow:    #38BDF820; /* glow / shadow */
  --color-accent-dim:     #0EA5E9;  /* hover state */

  /* Secondary accent — Amber (used sparingly for badges) */
  --color-amber:          #F59E0B;

  /* Text */
  --color-text-primary:   #E2E8F4;  /* main text */
  --color-text-secondary: #7A8BAD;  /* labels, meta */
  --color-text-muted:     #3D4F6E;  /* placeholder, faded */

  /* Status */
  --color-success:        #34D399;
  --color-warning:        #FBBF24;
  --color-danger:         #F87171;

  /* Section numbers (decorative) */
  --color-section-num:    #0E1C32;  /* large faded bg numbers */
}

/* Light mode overrides */
[data-theme="light"] {
  --color-bg-base:        #F4F6FB;
  --color-bg-surface:     #FFFFFF;
  --color-bg-elevated:    #EEF1F8;
  --color-bg-highlight:   #E4E9F5;
  --color-border:         #D8DEF0;
  --color-border-bright:  #C5CCE0;
  --color-text-primary:   #0F172A;
  --color-text-secondary: #4A5578;
  --color-text-muted:     #9AA3BC;
  --color-section-num:    #E8ECF5;
}
```

### Typography
```css
/* Display / Hero titles */
font-family: 'Syne', sans-serif;           /* bold, geometric, authoritative */

/* Section headings */
font-family: 'Syne', sans-serif;

/* Body / paragraphs */
font-family: 'Newsreader', serif;          /* elegant, readable, not cold */

/* Code / playground / skill tags */
font-family: 'JetBrains Mono', monospace;  /* developer authenticity */

/* UI labels / buttons / nav */
font-family: 'DM Sans', sans-serif;        /* clean, neutral utility font */
```

**Type scale:**
```
Hero title:       clamp(3rem, 8vw, 6rem)   — Syne Bold
Section title:    clamp(2rem, 4vw, 3rem)   — Syne SemiBold
Card title:       1.25rem                  — Syne Medium
Body text:        1rem / 1.75 line-height  — Newsreader Regular
Small/meta:       0.8125rem               — DM Sans Regular
Code:             0.875rem                — JetBrains Mono
Section numbers:  clamp(6rem, 15vw, 12rem) — Syne Black, opacity 0.04
```

### Spacing System (8px base)
```
--space-1:  4px
--space-2:  8px
--space-3:  12px
--space-4:  16px
--space-6:  24px
--space-8:  32px
--space-12: 48px
--space-16: 64px
--space-24: 96px
--space-32: 128px
```

### Animation Principles
- **Entry animations:** Elements fade up (translateY 20px → 0, opacity 0 → 1) as they scroll into view, staggered by 80ms
- **Hover states:** Cards lift (translateY -4px) + border brightens + subtle box-shadow glow
- **Accent glow:** Cyan `--color-accent` elements have a `box-shadow: 0 0 20px var(--color-accent-glow)` on hover
- **Typewriter:** Hero name types out character-by-character at 80ms/char, cursor blinks
- **Timeline:** Entries animate in from alternating sides on scroll
- **Page load:** Staggered reveal — nav (0ms) → hero text (200ms) → CTA buttons (500ms) → background (700ms)
- **Playground:** Code editor fades in with a shimmer effect

### Component Visual Specs

**Skill Pill:**
```
background: var(--color-bg-elevated)
border: 1px solid var(--color-border-bright)
border-radius: 6px
padding: 6px 12px
font: JetBrains Mono 12px
color: var(--color-accent) on hover
transition: border-color, color 200ms
```

**Project Card:**
```
background: var(--color-bg-surface)
border: 1px solid var(--color-border)
border-radius: 12px
padding: 24px
hover: border-color → var(--color-accent), translateY(-4px)
box-shadow on hover: 0 8px 32px var(--color-accent-glow)
```

**Timeline Node:**
```
width/height: 14px circle
background: var(--color-accent)
box-shadow: 0 0 0 4px var(--color-accent-glow)
connected by: 2px dashed line, color: var(--color-border-bright)
```

**CTA Button (Primary):**
```
background: var(--color-accent)
color: var(--color-bg-base)
border-radius: 8px
padding: 12px 28px
font: DM Sans SemiBold 15px
hover: brightness(1.1) + translateY(-2px)
active: translateY(0)
```

---

---

## 4. PAGE-BY-PAGE CONTENT PLAN {#content}

### Hero Section — Exact Copy
```
Hi, I'm
ROYA RASTEGARKANGACHER

FullStack Developer — React & TypeScript Specialist

6+ years building scalable web applications, micro-frontend architectures,
and enterprise-grade workflows. Based in Kuala Lumpur 🇲🇾

[View My Work]   [Contact Me]
```

### About Section — Exact Copy
```
ABOUT ME

I'm a FullStack Developer with 6+ years of experience crafting high-performance
web applications using React, TypeScript, and Node.js.

I specialize in micro-frontend architecture, dynamic form engines, and complex
multi-step workflows — the kind of engineering challenges that require both
technical precision and deep UX empathy.

From government payment systems in Tehran to commercial insurance platforms
in Kuala Lumpur, I've shipped production features across 4 companies,
3 countries, and countless late-night debugging sessions.

📍 Kuala Lumpur, Malaysia
🟢 Open to new opportunities

[6+ Years] [4 Companies] [3 Countries] [10+ Projects]
```

### Skills — Grouped Display

**Expert:**
React.js · TypeScript · JavaScript ES6+ · Redux Toolkit · RTK Query · Tailwind CSS · HTML5/CSS3

**Proficient:**
Next.js · Node.js · Express.js · React Router · React Hooks · Material UI · Micro-frontend · REST API · Git/GitHub Actions

**Familiar:**
MySQL · PostgreSQL · Vite · Jira · Agile/Scrum · Angular · Java Spring

### Experience — Bullet Points Per Role

**Tentacle | Etiqa Insurance & Takaful (Feb 2025 – Feb 2026)**
- Built micro-frontend modules for Commercial Vehicle Insurance using React, TypeScript, Vite
- Designed a dynamic form engine for configurable, reusable business forms
- Implemented complex multi-step workflows with validation and state persistence
- Integrated backend services via RTK Query (caching, loading states, error handling)
- Collaborated with DevOps on GitHub Actions CI/CD pipelines using Git tagging

**Freelancer, Kuala Lumpur (Oct 2022 – Oct 2024)**
- Built React/Redux frontend for an online shopping platform (product listing, cart, state)
- Developed responsive UI for online car rental booking flow and vehicle selection
- Created pet owners' management application with complex data workflows

**PND, Texas USA — Remote (Oct 2021 – Oct 2022)**
- Migrated legacy JSP report forms to modern React architecture
- Built wallet application frontend with React and Redux
- Maintained and extended healthcare web application features

**Hamrasta, Tehran, Iran (Apr 2019 – Oct 2021)**
- Built React forms for government service payments across 12 services
- Managed Redux state for 12 service forms and 4 department payment flows
- Led weekly knowledge-sharing sessions on tooling trade-offs

**Baharan, Tehran, Iran (Apr 2018 – Apr 2019)**
- Designed UI and created forms for online exam system serving 500K employees
- Implemented consolidated property reports in Jasper Report for 500K+ records
- Optimized database queries achieving 2× improvement in response time

---

---

## 5. FLOW ANALYSIS {#flow}

### Visitor Flow (Recruiter)
```
Land on site
    │
    ▼
Hero: Name + title + CTA (5 seconds — they know who you are)
    │
    ▼
Scroll → About: Photo + bio + stats (they're interested)
    │
    ▼
Scroll → Skills: Visual scan of tech stack (do you match their JD?)
    │
    ▼
Scroll → Experience: Timeline — seniority confirmed, companies scanned
    │
    ▼
Scroll → Projects: Click 1–2 projects → Live demo OR GitHub
    │
    ├─► [Impressed] → Scroll to Playground → try running code → jaw drops
    │
    └─► Scroll → Contact → Fill form OR copy email → reach out
```

### Visitor Flow (Freelance Client)
```
Land on site (often from LinkedIn)
    │
    ▼
Hero + About → are they the right fit?
    │
    ▼
Projects → have they built something similar?
    │
    ▼
Contact section → send message or email directly
```

### Navigation Flow
```
Nav links: About | Skills | Experience | Projects | Playground | Contact
    │
    ├─► All links smooth-scroll to section ID
    ├─► Active link updates on scroll (IntersectionObserver)
    ├─► Mobile: hamburger opens full-screen overlay menu
    ├─► Logo click: scroll to top
    └─► "Download CV" → opens PDF in new tab
```

### Playground Interaction Flow
```
User arrives at Playground section
    │
    ▼
Default snippet loads: "Dynamic Form Engine"
    │
    ├─► User reads code in Monaco editor
    ├─► Live preview renders on right
    ├─► User edits code → preview hot-reloads
    ├─► User clicks snippet selector → switches to "Multi-step Wizard"
    ├─► User clicks "Copy Code" → clipboard toast
    └─► User clicks "Reset" → restores original snippet
```

### Contact Form Flow
```
User fills: Name → Email → Subject → Message
    │
    ▼
Click "Send Message"
    │
    ├─► Client validation (empty fields, email format)
    │
    ▼
POST to /api/contact OR EmailJS send
    │
    ├─► Success → "Message sent! I'll get back to you soon." toast
    └─► Error → "Something went wrong. Try emailing me directly." toast
```

### Dark/Light Mode Flow
```
Default: dark mode
Toggle click:
    ├─► Toggle [data-theme] attribute on <html>
    ├─► Save preference to localStorage
    └─► All CSS variables switch via [data-theme="light"] overrides
On page load:
    └─► Read localStorage → apply theme before first paint (no flash)
```

---

---

## 6. TECH STACK & TOOLS {#stack}

### Frontend
| Tool | Version | Purpose |
|------|---------|---------|
| React | 18 | UI framework |
| Vite | 5 | Build tool, fast HMR |
| TypeScript | 5 | Type safety throughout |
| Tailwind CSS | 3 | Utility-first styling |
| React Router v6 | 6 | Client-side routing (single page) |
| Framer Motion | 11 | Scroll animations, page transitions, stagger reveals |
| @sandpack/react | latest | Live code playground (by CodeSandbox) |
| @monaco-editor/react | latest | VS Code editor in browser |
| react-intersection-observer | latest | Trigger scroll animations, active nav highlight |
| react-hot-toast | latest | Toast notifications |
| react-hook-form + zod | latest | Contact form + validation |
| lucide-react | latest | Icon library (clean, consistent) |
| clsx + tailwind-merge | latest | Conditional class utility |

### Backend (lightweight — optional)
| Tool | Purpose |
|------|---------|
| Node.js + Express | Contact form email endpoint |
| Nodemailer | Send emails from contact form |
| cors, helmet, dotenv | Security and config |
| express-rate-limit | Prevent form spam |

> **Alternative (no backend):** Use **EmailJS** — sends email directly from the browser with no backend needed. Recommended for simplicity.

### Fonts (Google Fonts)
```html
<link href="https://fonts.googleapis.com/css2?
  family=Syne:wght@400;500;600;700;800&
  family=Newsreader:ital,wght@0,400;0,500;1,400&
  family=JetBrains+Mono:wght@400;500&
  family=DM+Sans:wght@400;500;600&
  display=swap" rel="stylesheet">
```

### Dev Tools
| Tool | Purpose |
|------|---------|
| ESLint + Prettier | Code quality and formatting |
| Husky + lint-staged | Pre-commit hooks |
| GitHub Actions | Auto-deploy on push to main |
| Lighthouse CI | Performance score monitoring |

### Deployment
| Service | What it hosts |
|---------|--------------|
| Vercel | Frontend (auto-deploys from GitHub) |
| Render.com | Backend contact API (if used) |
| GitHub | Source code, linked to Vercel |
| Custom domain | yourdomain.com (optional: Namecheap / GoDaddy) |

---

---

## 7. MOBILE RESPONSIVENESS STRATEGY {#mobile}

### Breakpoints (Tailwind)
```
sm:  640px   — large phones (landscape)
md:  768px   — tablets
lg:  1024px  — small laptops
xl:  1280px  — desktops
2xl: 1536px  — large monitors
```

### Section-by-Section Mobile Adaptations

**Navigation:**
- Desktop: horizontal link bar
- Mobile (<768px): hamburger icon → full-screen overlay with large stacked links
- Overlay: slide-in from right with backdrop blur
- Close: tap X or tap outside

**Hero:**
- Desktop: large 6rem title, two CTA buttons side by side
- Mobile: title clamp to 2.5rem, buttons stack vertically, background simplified (reduce animation complexity)

**About:**
- Desktop: 2-column (photo left, text right)
- Mobile: 1-column (photo centered above, text below)
- Stats row: 2×2 grid on mobile

**Skills:**
- Desktop: grouped columns
- Mobile: category accordion — tap to expand each group
- Pills wrap naturally with `flex-wrap`

**Experience Timeline:**
- Desktop: alternating left/right timeline
- Mobile: single left-aligned column, line on left edge
- Bullets collapsed by default on mobile ("Show more" tap)

**Projects Grid:**
- Desktop: 2-column grid
- Mobile: 1-column stack
- Filter tabs: horizontally scrollable row on mobile

**Playground:**
- Desktop: side-by-side split (editor left, preview right)
- Mobile: tabbed layout — "Code" tab / "Preview" tab
- Monaco editor height: 300px fixed on mobile (not full height)
- Font size reduced to 12px on mobile editor

**Contact:**
- Desktop: form left, contact info cards right
- Mobile: stacked (form above, contact info below)
- Input fields full width on all mobile sizes

**Footer:**
- Desktop: 3-column (name/tagline, links, social)
- Mobile: centered single column stack

### Touch & Interaction Considerations
- All tap targets minimum 44×44px (iOS/Android guidelines)
- No hover-only interactions — all hover states have tap equivalents
- Swipe gesture on project cards (mobile): swipe left to reveal GitHub/demo links
- Smooth scroll behavior: `scroll-behavior: smooth` + momentum on iOS (`-webkit-overflow-scrolling: touch`)
- Viewport meta: `<meta name="viewport" content="width=device-width, initial-scale=1.0">`
- No horizontal overflow: `overflow-x: hidden` on body
- Contact form: inputs avoid triggering zoom (font-size ≥ 16px on all inputs)

### Performance on Mobile
- Images: WebP format, `loading="lazy"` on all images below the fold
- Animations: `prefers-reduced-motion` media query — disable all Framer Motion animations if user has this set
- Bundle splitting: React.lazy() for Playground section (Monaco + Sandpack are large — only load when in viewport)
- Font display: `font-display: swap` to prevent invisible text during font load

---

---

## 8. STEP-BY-STEP BUILD PLAN {#plan}

### Phase 1 — Project Scaffold & Config (Day 1)

- [ ] `npm create vite@latest roya-portfolio -- --template react-ts`
- [ ] Install Tailwind CSS v3 (`npm install -D tailwindcss postcss autoprefixer`)
- [ ] Configure `tailwind.config.ts` with custom colors, fonts, spacing from design system
- [ ] Set up global CSS: CSS variables for dark/light theme, font imports
- [ ] Install core libraries: `framer-motion`, `react-router-dom`, `lucide-react`, `clsx`, `tailwind-merge`
- [ ] Set up folder structure:
  ```
  src/
    components/
      layout/       (Header, Footer, MobileMenu)
      sections/     (Hero, About, Skills, Experience, Projects, Playground, Contact)
      ui/           (Button, Card, Badge, Tag, Modal, Toast)
    hooks/          (useTheme, useScrollSpy, useInView, useTypewriter)
    data/           (projects.ts, experience.ts, skills.ts, snippets.ts)
    types/          (index.ts)
    utils/          (cn.ts, formatDate.ts)
    assets/         (photos, CV PDF)
  ```
- [ ] Create `data/` files with all CV content typed as TypeScript interfaces
- [ ] Initialize GitHub repo and push
- [ ] Set up ESLint + Prettier config

### Phase 2 — Theme System & Layout Shell (Day 2)

- [ ] Create `useTheme` hook: reads/writes `localStorage`, toggles `data-theme` on `<html>`
- [ ] Build `<Header>` component:
  - Logo (name monogram)
  - Nav links with smooth scroll
  - Dark/Light toggle button
  - Download CV button
  - Mobile hamburger icon
- [ ] Build `<MobileMenu>` overlay component with Framer Motion slide-in
- [ ] Build `<Footer>` component
- [ ] Build scroll progress bar (thin line at top of viewport)
- [ ] Set up `useScrollSpy` hook with IntersectionObserver for active nav state
- [ ] Verify theme toggle works with no flash on page load (apply theme in `<script>` before React mounts)

### Phase 3 — Hero & About Sections (Day 3)

- [ ] `<Hero>` section:
  - [ ] Build `useTypewriter` hook for animated name reveal
  - [ ] Staggered text entry with Framer Motion (heading, subtitle, CTAs)
  - [ ] Animated background: subtle dot grid or slow geometric mesh (CSS or Canvas)
  - [ ] Floating skill tags: position absolute, staggered fade-in
  - [ ] CTA buttons linking to #projects and #contact
- [ ] `<About>` section:
  - [ ] Two-column responsive grid
  - [ ] Professional photo with subtle border glow
  - [ ] Bio text with Roya's content
  - [ ] Stats row: animated count-up numbers on scroll into view
  - [ ] "Open to opportunities" badge with green pulsing dot
  - [ ] Quick fact chips

### Phase 4 — Skills & Experience Sections (Day 4)

- [ ] `<Skills>` section:
  - [ ] Group skills by category in `data/skills.ts`
  - [ ] Desktop: 3-column grouped grid
  - [ ] Mobile: accordion per category (useState expand/collapse)
  - [ ] Skill pills with JetBrains Mono font
  - [ ] Proficiency labels (Expert / Proficient / Familiar)
  - [ ] Stagger animate pills in on scroll
- [ ] `<Experience>` section:
  - [ ] Build timeline from `data/experience.ts`
  - [ ] Alternating layout on desktop, single column on mobile
  - [ ] Animated timeline line drawing effect on scroll
  - [ ] Expandable bullet points ("Show more" / "Show less")
  - [ ] Tech stack chips per role
  - [ ] Timeline dot with cyan glow

### Phase 5 — Projects Section (Day 5)

- [ ] Create `data/projects.ts` with all 11 projects typed:
  ```ts
  interface Project {
    id: string
    title: string
    description: string
    category: 'frontend' | 'fullstack' | 'backend'
    techStack: string[]
    featured: boolean
    liveUrl?: string
    githubUrl?: string
    image?: string
  }
  ```
- [ ] `<Projects>` section:
  - [ ] Filter tabs: All / Frontend / Fullstack / Backend
  - [ ] Animated filter transition (cards reorder with layout animation via Framer Motion)
  - [ ] `<ProjectCard>` with hover lift + glow border
  - [ ] "Featured" badge on top 2
  - [ ] Live demo + GitHub icon buttons
  - [ ] Stagger card entry on scroll

### Phase 6 — Live Code Playground (Day 6–7)

This is the most complex section — dedicate 2 days.

- [ ] Install Sandpack: `npm install @codesandbox/sandpack-react`
- [ ] Install Monaco: `npm install @monaco-editor/react`
- [ ] Create `data/snippets.ts` — write 4–5 real React code snippets:
  ```ts
  interface CodeSnippet {
    id: string
    label: string
    description: string
    files: Record<string, string>  // Sandpack files format
  }
  ```
- [ ] Write the 5 snippets:
  1. **Dynamic Form Engine** — multi-field configurable form built from JSON schema
  2. **Multi-step Wizard** — 3-step form with state persistence (localStorage)
  3. **RTK Query Pattern** — mock data fetching with loading/error states
  4. **useDebounce Hook** — search input with debounced API simulation
  5. **Micro-frontend Shell** — simple module federation concept demo
- [ ] Build `<Playground>` section:
  - [ ] Snippet selector dropdown (styled with Tailwind)
  - [ ] Desktop: side-by-side split layout (50/50)
  - [ ] Mobile: tabbed (Code tab / Preview tab) with tab switcher
  - [ ] "Copy Code" button with clipboard API + toast feedback
  - [ ] "Reset" button to restore original snippet
  - [ ] Lazy load entire section: `const Playground = React.lazy(() => import('./sections/Playground'))`
  - [ ] Loading skeleton shown while Sandpack initializes
  - [ ] Label: *"Real patterns from production — try editing the code"*

### Phase 7 — Education, Certifications & Contact (Day 8)

- [ ] `<Education>` section:
  - [ ] University card with degree, institution, dates
  - [ ] Certification cards (3) with Udemy logo placeholder + dates
- [ ] `<Contact>` section:
  - [ ] Install `react-hook-form` + `zod`
  - [ ] Install `react-hot-toast`
  - [ ] Build form: Name, Email, Subject, Message
  - [ ] Zod validation schema
  - [ ] Choose integration:
    - **Option A (simpler):** EmailJS — `npm install @emailjs/browser`, create free account, configure template
    - **Option B (full):** Express backend with Nodemailer
  - [ ] Success/error toast handling
  - [ ] Contact info cards beside form
  - [ ] Social links (GitHub, LinkedIn, Email)

### Phase 8 — Animations, Polish & Accessibility (Day 9)

- [ ] Wrap all sections in scroll-triggered Framer Motion `whileInView` animations
- [ ] Add `prefers-reduced-motion` check — disable animations if set
- [ ] Audit all interactive elements for keyboard navigation (Tab, Enter, Escape)
- [ ] Add proper ARIA labels on icon buttons, nav toggle, theme toggle
- [ ] Add `alt` text to all images
- [ ] Ensure all text meets WCAG AA contrast ratios (use Tailwind contrast checker)
- [ ] Smooth scroll polyfill for Safari
- [ ] Add `<meta>` SEO tags: title, description, og:image, og:title, twitter card
- [ ] Add favicon (monogram "R" in cyan on dark circle)
- [ ] Run Lighthouse audit → target 90+ Performance, 100 Accessibility

### Phase 9 — Deploy & Launch (Day 10)

- [ ] Connect GitHub repo to Vercel
- [ ] Set production environment variables (EmailJS keys or backend URL)
- [ ] Configure custom domain (optional)
- [ ] Set up GitHub Actions workflow: lint + build check on every PR
- [ ] Write README:
  - Project overview + live demo link
  - Local setup instructions
  - Tech stack used
  - Screenshot(s)
- [ ] Share on LinkedIn with a post about the live playground feature
- [ ] Update LinkedIn profile URL to point to new portfolio

---

---

## 9. DEPLOYMENT GUIDE {#deploy}

### Vercel Deployment (Frontend)
```bash
# Install Vercel CLI
npm install -g vercel

# From project root
vercel

# Follow prompts:
# - Link to GitHub repo
# - Framework: Vite
# - Build command: npm run build
# - Output directory: dist
```

### Environment Variables (Vercel Dashboard)
```
VITE_EMAILJS_SERVICE_ID=service_xxxxx
VITE_EMAILJS_TEMPLATE_ID=template_xxxxx
VITE_EMAILJS_PUBLIC_KEY=xxxxxxxxxxxxxxx
```

### GitHub Actions CI (create `.github/workflows/ci.yml`)
```yaml
name: CI
on: [push, pull_request]
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with: { node-version: '20' }
      - run: npm ci
      - run: npm run lint
      - run: npm run build
```

### Performance Checklist Before Launch
- [ ] Lighthouse Performance score ≥ 90
- [ ] Lighthouse Accessibility score = 100
- [ ] No layout shift (CLS < 0.1)
- [ ] First Contentful Paint < 1.5s
- [ ] Playground lazy-loaded (not in initial bundle)
- [ ] Images optimized (WebP, correct dimensions)
- [ ] Fonts preloaded in `<head>`

---

---

## APPENDIX: FOLDER STRUCTURE

```
roya-portfolio/
├── public/
│   ├── favicon.ico
│   ├── roya-cv.pdf              ← CV download
│   └── og-image.png             ← Social share preview
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.tsx
│   │   │   ├── Footer.tsx
│   │   │   ├── MobileMenu.tsx
│   │   │   └── ScrollProgress.tsx
│   │   ├── sections/
│   │   │   ├── Hero.tsx
│   │   │   ├── About.tsx
│   │   │   ├── Skills.tsx
│   │   │   ├── Experience.tsx
│   │   │   ├── Projects.tsx
│   │   │   ├── Playground.tsx   ← lazy loaded
│   │   │   ├── Education.tsx
│   │   │   └── Contact.tsx
│   │   └── ui/
│   │       ├── Button.tsx
│   │       ├── Card.tsx
│   │       ├── Badge.tsx
│   │       ├── SkillTag.tsx
│   │       ├── ProjectCard.tsx
│   │       ├── TimelineItem.tsx
│   │       └── SectionHeader.tsx
│   ├── hooks/
│   │   ├── useTheme.ts
│   │   ├── useScrollSpy.ts
│   │   ├── useTypewriter.ts
│   │   ├── useInView.ts
│   │   └── useCountUp.ts
│   ├── data/
│   │   ├── projects.ts
│   │   ├── experience.ts
│   │   ├── skills.ts
│   │   ├── education.ts
│   │   └── snippets.ts
│   ├── types/
│   │   └── index.ts
│   ├── utils/
│   │   ├── cn.ts                ← clsx + tailwind-merge helper
│   │   └── constants.ts
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css                ← CSS variables, global styles
├── .github/
│   └── workflows/
│       └── ci.yml
├── tailwind.config.ts
├── vite.config.ts
├── tsconfig.json
├── .eslintrc.json
├── .prettierrc
└── README.md
```

---

*Blueprint prepared May 2026 | Portfolio Project for Roya RastegarKangacher*
*Stack: React 18 · Vite · TypeScript · Tailwind CSS · Framer Motion · Sandpack*
