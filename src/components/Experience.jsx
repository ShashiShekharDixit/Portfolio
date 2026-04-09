import { EXPERIENCES } from "../data/index.js";

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="reveal">
        <div className="section-label">02 — experience</div>
        <h2 className="section-title">
          WHERE I<br />
          <span className="accent">MADE AN</span><br />
          <span className="serif">Impact.</span>
        </h2>
      </div>

      <div className="timeline-v2 reveal" style={{ marginTop: "4rem" }}>
        {EXPERIENCES.map((exp) => (
          <div
            className="timeline-node"
            key={exp.role}
            data-year={exp.year}
          >
            <div className="timeline-dot-v2" />
            <div className="timeline-content">
              <div className="timeline-role">{exp.role}</div>
              <div className="timeline-company">{exp.company}</div>
              <p className="timeline-desc">{exp.desc}</p>
              <div className="timeline-chips">
                {exp.tags.map((t) => (
                  <span
                    key={t}
                    className={`chip${exp.color === "orange" ? " orange" : ""}`}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
