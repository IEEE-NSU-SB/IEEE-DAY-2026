# IEEE Day 2026 — IEEE NSU Student Branch

> Official promotional website for **IEEE Day 2026**, celebrating the founding of the IEEE on October 6. Organized by the **IEEE NSU Student Branch**, Dhaka, Bangladesh.

**Live season:** September 25 – October 8, 2026 · **IEEE Day:** October 6, 2026

---

## Overview

A single-page web application built as an editorial-style microsite for IEEE Day 2026. It covers the season's events, contests, ambassador activities, and achievement highlights — all styled with a magazine-inspired design system using the official IEEE Blue palette.

---

## Pages

| Route | Content |
|---|---|
| `/` | Hero, tagline, season timeline, table of contents |
| `/events` | 4 flagship events — TechFest, WIE, IAS Mega 2.0, RoboQuest |
| `/activities` | IEEE Day Ambassador profiles |
| `/timeline` | 5-milestone season roadmap (Sept 25 → Oct 8) |
| `/contest` | 3 contest tracks — Global Photo, 60-Second Reel, Technical Paper |
| `/achievement` | Award showcase — 1st Place Worldwide + branch honours |
| `/about` | Branch info, contact details, social channels |

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | React 19 |
| Build Tool | Vite 8 |
| Routing | React Router DOM v7 |
| Styling | Tailwind CSS v4 |
| Smooth Scroll | Lenis v1.3 |
| Icons | Lucide React |
| Fonts | Libre Caslon Display · Libre Caslon Text · Inter (Google Fonts) |
| Linter | Oxlint |

---

## Getting Started

**Prerequisites:** Node.js 18+

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

The dev server runs at `http://localhost:5173`.

---

## Project Structure

```
src/
├── components/
│   ├── AmbientBackground.jsx   # Animated parallax fog background
│   ├── Navbar.jsx              # Sticky glass-morphism navbar
│   ├── Layout.jsx              # Root layout wrapper
│   ├── Reveal.jsx              # Scroll-reveal wrapper
│   ├── OutlineRevealText.jsx   # Scroll-linked outline-to-fill text
│   ├── ScrollRevealText.jsx    # Word-by-word scroll reveal
│   ├── DateRange.jsx           # SVG season timeline
│   └── ...
├── pages/
│   ├── Home.jsx
│   ├── Events.jsx
│   ├── Activities.jsx
│   ├── Timeline.jsx
│   ├── Contest.jsx
│   ├── Achievement.jsx
│   ├── About.jsx
│   └── NotFound.jsx
├── hooks/
│   └── useInView.js            # IntersectionObserver hook
├── App.jsx                     # Route definitions
├── main.jsx                    # Entry point
└── index.css                   # Tailwind + theme tokens + keyframes
```

---

## Design System

- **Primary accent:** IEEE Blue `#00629B`
- **Background:** Warm off-white paper `#eeeeec`
- **Display typeface:** Libre Caslon Display (headlines, pull-quotes)
- **Body typeface:** Inter
- **Motion:** CSS keyframe animations + mouse-driven parallax via `requestAnimationFrame`; all motion respects `prefers-reduced-motion`

---

## Branch

**IEEE NSU Student Branch**
Room SAC 412, North South University, Dhaka, Bangladesh

---

## License

This project is for internal IEEE NSU Student Branch use. All rights reserved.
