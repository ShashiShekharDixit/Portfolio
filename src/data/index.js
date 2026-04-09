export const NAV_LINKS = ["about", "experience", "projects", "skills", "contact"];

export const HERO_STATS = [
  { num: "2+", label: "Years Exp" },
  { num: "10+", label: "Projects" },
  { num: "2", label: "Internships" },
  { num: "200+", label: "Problems" },
];

export const MARQUEE_ITEMS = [
  "React.js", "Node.js", "Three.js", "TypeScript",
  "Python", "Pandas", "Next.js", "Spring Boot",
  "Tailwind CSS", "REST APIs", "NumPy", "SQL",
  "Data Science", "Web Dev", "ML Pipelines", "C++",
];

export const HIGHLIGHTS = [
  { icon: "🎓", label: "Degree", val: "B.Tech IT" },
  { icon: "📍", label: "Location", val: "Lucknow, UP" },
  { icon: "🏢", label: "Last Intern", val: "IBM" },
  { icon: "⚡", label: "Focus", val: "Web + Data" },
];

export const TERMINAL_LINES = [
  { prompt: "~/ssd $", cmd: "whoami" },
  { out: "Shashi Shekhar Dixit — Web Dev + Data Science Enthusiast" },
  { prompt: "~/ssd $", cmd: "cat education.txt" },
  { out: "B.Tech Information Technology · SRMCEM Lucknow · 2021–2025" },
  { prompt: "~/ssd $", cmd: "ls internships/" },
  { out: "ibm-data-science-2024/   my-cto-innovations-2023/" },
  { prompt: "~/ssd $", cmd: "node --version && python3 --version" },
  { out: "v20.11.0   Python 3.11.4" },
  { prompt: "~/ssd $", cmd: "_", blink: true },
];

export const EXPERIENCES = [
  {
    year: "2024",
    role: "Data Science Intern",
    company: "IBM — Lucknow",
    desc: "Worked on real-world enterprise datasets to surface business insights through systematic analysis and visualization. Built dashboards facilitating team-level decision making, and developed end-to-end understanding of ML pipelines and statistical modelling in production context.",
    tags: ["Python", "Pandas", "NumPy", "Visualization", "ML Pipelines", "Decision Insights"],
    color: "lime",
  },
  {
    year: "2023",
    role: "Web Developer",
    company: "My CTO Innovations",
    desc: "Designed and built responsive, pixel-perfect UIs for client-facing products. Integrated REST APIs with Node.js backends, managed React component architecture, and contributed to measurable improvements in page load time and user engagement metrics.",
    tags: ["React.js", "Node.js", "Tailwind CSS", "Bootstrap", "REST APIs", "Blazor", "Maui"],
    color: "orange",
  },
];

export const PROJECTS = [
  {
    num: "01",
    title: "3D Portfolio",
    desc: "Immersive portfolio experience powered by Three.js and React. Features interactive 3D scenes, custom GLSL shaders, and real-time WebGL rendering pushing browser graphics to their limits.",
    tags: [
      { label: "React", color: "" },
      { label: "Three.js", color: "cyan" },
      { label: "TypeScript", color: "" },
      { label: "WebGL", color: "orange" },
    ],
    metrics: [
      { val: "60fps", label: "Render" },
      { val: "3", label: "3D Scenes" },
      { val: "98", label: "Lighthouse" },
    ],
    demo: "#",
    github: "#",
  },
  {
    num: "02",
    title: "Sorting Visualizer",
    desc: "Real-time algorithm visualizer with step-by-step animation control, speed adjustment, and array size customization. Demonstrates both algorithmic depth and polished engineering in Next.js.",
    tags: [
      { label: "Next.js", color: "" },
      { label: "TypeScript", color: "" },
      { label: "Algorithms", color: "orange" },
    ],
    metrics: [
      { val: "6+", label: "Algorithms" },
      { val: "O(n)", label: "Best Case" },
      { val: "100ms", label: "Step Control" },
    ],
    demo: "#",
    github: "#",
  },
];

export const SKILL_CATEGORIES = [
  {
    id: "frontend",
    label: "Frontend",
    skills: [
      { name: "React.js", pct: 90, color: "" },
      { name: "Next.js", pct: 82, color: "" },
      { name: "TypeScript", pct: 78, color: "" },
      { name: "Three.js", pct: 72, color: "cyan" },
      { name: "Tailwind CSS", pct: 88, color: "" },
      { name: "JavaScript", pct: 85, color: "" },
    ],
  },
  {
    id: "backend",
    label: "Backend",
    skills: [
      { name: "Node.js", pct: 80, color: "" },
      { name: "Spring Boot", pct: 68, color: "orange" },
      { name: "SQL", pct: 75, color: "" },
      { name: "REST APIs", pct: 82, color: "" },
      { name: "Java", pct: 74, color: "orange" },
    ],
  },
  {
    id: "data",
    label: "Data Science",
    skills: [
      { name: "Python", pct: 82, color: "" },
      { name: "Pandas", pct: 78, color: "" },
      { name: "NumPy", pct: 75, color: "" },
      { name: "Data Viz", pct: 80, color: "cyan" },
      { name: "ML Fundamentals", pct: 65, color: "orange" },
    ],
  },
  {
    id: "tools",
    label: "Tools",
    skills: [
      { name: "Git / GitHub", pct: 88, color: "" },
      { name: "VS Code", pct: 95, color: "" },
      { name: "Postman", pct: 80, color: "" },
      { name: "C++", pct: 72, color: "orange" },
    ],
  },
];

// Radar chart data (polygonal skill spider)
export const RADAR_SKILLS = [
  { label: "Frontend", value: 88 },
  { label: "Backend", value: 76 },
  { label: "Data Science", value: 76 },
  { label: "Problem Solving", value: 82 },
  { label: "System Design", value: 70 },
  { label: "DevOps", value: 62 },
];

export const PROFILES = [
  { emoji: "⚡", platform: "LeetCode", stat: "200+", sub: "Problems Solved", badge: "Rating 1550+" },
  { emoji: "🏆", platform: "GeeksforGeeks", stat: "150+", sub: "Problems Solved", badge: "Top 5% Institute" },
  { emoji: "⭐", platform: "GitHub", stat: "20+", sub: "Repositories", badge: "Active Contributor" },
  { emoji: "📊", platform: "Kaggle", stat: "5+", sub: "Notebooks", badge: "Contributor" },
];

export const PERF_SCORES = [
  { score: 98, label: "Performance", color: "#c8f135" },
  { score: 95, label: "Accessibility", color: "#00e5ff" },
  { score: 100, label: "Best Practices", color: "#ff5722" },
  { score: 97, label: "SEO", color: "#c8f135" },
];

export const WHY_CARDS = [
  { index: "01", icon: "🔗", title: "Full-Stack + Data — Rare Combo", desc: "Most developers pick a lane. I bridge the gap — building polished UIs and understanding the data behind them. Fewer handoffs, better decisions, products that actually perform." },
  { index: "02", icon: "🏭", title: "Real Industry Exposure", desc: "Not just coursework. Two internships — IBM (data) and My CTO Innovations (web) — mean I've shipped real code, worked with real constraints, and met real deadlines." },
  { index: "03", icon: "⚡", title: "I Learn Faster Than Most", desc: "TypeScript, Three.js, Spring Boot — I pick up new technologies fast and go deep. What I don't know today, I'll have production-ready within days, not weeks." },
  { index: "04", icon: "🎯", title: "Outcome-Focused, Not Task-Focused", desc: "I care whether the product succeeds, not just whether the ticket closes. At every role I've asked \"what problem are we really solving?\" before writing a single line." },
];

export const TESTIMONIALS = [
  { initials: "RK", name: "Rajesh Kumar", role: "Senior Data Analyst, IBM Lucknow", text: "Shashi has an exceptional ability to turn complex data into clear, actionable insights. His work on our internal dashboards helped the team make faster, better-informed decisions. A rare talent equally comfortable with code and analysis." },
  { initials: "AM", name: "Ankit Mishra", role: "Tech Lead, My CTO Innovations", text: "One of the most self-driven interns we've had. Shashi took ownership of the UI component library from day one and delivered a polished, accessible design system ahead of schedule. His React skills are production-grade." },
  { initials: "PS", name: "Prof. P. Srivastava", role: "Faculty, SRMCEM Lucknow", text: "Shashi's 3D portfolio project genuinely impressed our entire cohort. Seeing Three.js used that elegantly is uncommon — it reflects not just skill, but a real passion for the craft of frontend engineering." },
];

export const CHAT_SUGGESTIONS = [
  "Tell me about IBM internship",
  "What's your tech stack?",
  "Best project?",
];

export const CHATBOT_SYSTEM = `You are an AI assistant for Shashi Shekhar Dixit's portfolio. Shashi is a B.Tech IT student at SRMCEM Lucknow (2021–2025). He interned as Data Science Intern at IBM Lucknow and Web Developer at My CTO Innovations. Projects: 3D Portfolio (React, Three.js, TypeScript) and Sorting Visualizer (Next.js, TypeScript). Skills: React, Next.js, Node.js, Spring Boot, TypeScript, Three.js, Python, Pandas, NumPy, Java, C++, SQL. Answer concisely in 2-3 sentences, professionally and enthusiastically. Never say you are Claude or any AI model — you are "Shashi's terminal assistant".`;
