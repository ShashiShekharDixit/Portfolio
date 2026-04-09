import { PROJECTS } from "../data/index.js";
import useTilt from "../hooks/useTilt.js";

function ProjectCard({ proj }) {
  const tiltRef = useTilt(6);

  return (
    <div className="project-card tilt-card" ref={tiltRef}>
      <div className="project-num">{proj.num}</div>
      <div className="project-inner">
        <div className="project-tag-row">
          {proj.tags.map(({ label, color }) => (
            <span key={label} className={`chip${color ? " " + color : ""}`}>
              {label}
            </span>
          ))}
        </div>
        <div className="project-title">{proj.title}</div>
        <p className="project-desc">{proj.desc}</p>
        <div className="project-metrics">
          {proj.metrics.map(({ val, label }) => (
            <div key={label}>
              <div className="project-metric-val">{val}</div>
              <div className="project-metric-label">{label}</div>
            </div>
          ))}
        </div>
        <div className="project-links">
          <a href={proj.demo} className="project-link">↗ Live Demo</a>
          <a href={proj.github} className="project-link">⌥ GitHub</a>
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="reveal">
        <div className="section-label">03 — projects</div>
        <h2 className="section-title">
          WORK THAT<br />
          <span className="accent">SPEAKS FOR</span><br />
          <span className="serif">Itself.</span>
        </h2>
        <p style={{ fontSize: "0.78rem", color: "var(--muted)", marginTop: "0.5rem", maxWidth: "420px" }}>
          Handpicked projects that showcase real technical depth — not just demos.
        </p>
      </div>

      <div className="grid-2 reveal" style={{ marginTop: "4rem" }}>
        {PROJECTS.map((proj) => (
          <ProjectCard key={proj.num} proj={proj} />
        ))}
      </div>
    </section>
  );
}
