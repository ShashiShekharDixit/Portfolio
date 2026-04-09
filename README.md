# Shashi Shekhar Dixit — Portfolio V2
### Brutalist Terminal Design

A completely redesigned portfolio with a **Brutalist Neomorphic Terminal** aesthetic.

---

## Design Language

| Element | Choice |
|---------|--------|
| Palette | Charcoal `#0a0a08` + Electric Lime `#c8f135` + Blood Orange `#ff5722` + Bone `#f0ede4` |
| Display font | **Bebas Neue** (impact headers) |
| Accent font | **DM Serif Display** (italic contrast) |
| Body/Code font | **Space Mono** (terminal feel) |
| Cursor | Custom square magnetic cursor with ring |
| Texture | Scanline overlay + SVG noise grain |
| Cards | Clip-path parallelogram buttons, square corners, 1px borders |

---

## New & Advanced Features (vs V1)

| Feature | Description |
|---------|-------------|
| **Glitch text** | CSS keyframe glitch effect on hero name |
| **Scanline overlay** | CRT-style repeating gradient on body |
| **Noise grain** | SVG turbulence noise layer at 3% opacity |
| **Magnetic cursor** | Square dot + ring cursor, circular on hover |
| **Scroll progress bar** | 2px lime line at top tracking scroll % |
| **Live clock** | Real-time HH:MM:SS ticking in the navbar center |
| **Marquee ticker** | Infinite scrolling tech stack marquee band |
| **Typewriter terminal** | Animated bash terminal in About section |
| **3D tilt cards** | `perspective + rotateX/Y` on project cards |
| **Skill radar chart** | SVG hexagonal spider chart with animation |
| **Dashed timeline** | Diamond dots + dashed vertical line for Experience |
| **Clip-path buttons** | Parallelogram-shaped CTA buttons |
| **Intersection reveals** | Fade-up scroll reveal on every section |
| **AI Chatbot** | Terminal-styled Claude-powered chat widget |
| **AI Message Generator** | Personalized recruiter outreach generator |
| **Section counter labels** | 01–10 numbered section labels |

---

## 🗂 Project Structure

```
shashi-v2/
├── public/
│   └── favicon.svg               ← Lime diamond favicon
├── src/
│   ├── components/
│   │   ├── About.jsx             ← About + ASCII art + terminal
│   │   ├── Chatbot.jsx           ← Terminal-style AI chat widget
│   │   ├── CodingProfiles.jsx    ← Platform stats grid
│   │   ├── Contact.jsx           ← Contact section
│   │   ├── Cursor.jsx            ← Magnetic square cursor + ring
│   │   ├── Experience.jsx        ← Dashed timeline with diamonds
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx              ← Glitch text + stats
│   │   ├── LiveClock.jsx         ← Real-time HH:MM:SS clock
│   │   ├── Marquee.jsx           ← Infinite tech-stack ticker
│   │   ├── Navbar.jsx
│   │   ├── Performance.jsx       ← SVG lighthouse rings
│   │   ├── Projects.jsx          ← 3D tilt project cards
│   │   ├── RadarChart.jsx        ← SVG skill spider/radar chart
│   │   ├── ResumeGenerator.jsx   ← AI recruiter message generator
│   │   ├── ScrollProgress.jsx    ← Lime progress bar at top
│   │   ├── Skills.jsx            ← Tabbed bars + radar chart
│   │   ├── TerminalBlock.jsx     ← Animated typewriter terminal
│   │   ├── Testimonials.jsx
│   │   └── WhyHireMe.jsx
│   ├── data/
│   │   └── index.js              ← All content data
│   ├── hooks/
│   │   ├── useScrollReveal.js    ← IntersectionObserver reveal hook
│   │   └── useTilt.js            ← 3D perspective tilt hook
│   ├── styles/
│   │   └── global.css            ← Full design system + animations
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── vite.config.js
├── package.json
└── .gitignore
```

---

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Start dev server (opens at localhost:3000)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

---

## ⚙️ Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | React 18 + Vite 5 |
| Styling | Pure CSS with custom variables |
| Charts | Custom SVG (no library) |
| AI Features | Anthropic Claude API |
| Fonts | Bebas Neue · DM Serif Display · Space Mono |

---

## 🤖 AI Features Note

Both AI features call the Anthropic API. When running **outside** the Claude.ai artifact environment, add your API key:

```js
headers: {
  "Content-Type": "application/json",
  "x-api-key": "YOUR_API_KEY",
  "anthropic-version": "2023-06-01",
  "anthropic-dangerous-direct-browser-access": "true",
}
```

---

## 🎨 Customising Content

All text, numbers, and data live in:
```
src/data/index.js
```

Edit `PROJECTS`, `EXPERIENCES`, `SKILLS`, `TESTIMONIALS`, `RADAR_SKILLS`, `PROFILES` etc.

---

## 🌐 Deploy

```bash
# Vercel
npx vercel

# Netlify — drag dist/ folder after:
npm run build
```
"# Portfolio" 
