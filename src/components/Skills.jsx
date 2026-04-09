import { useState, useEffect, useRef } from "react";
import { SKILL_CATEGORIES } from "../data/index.js";
import RadarChart from "./RadarChart.jsx";

function SkillBar({ name, pct, color, animate }) {
  return (
    <div className="skill-row">
      <div className="skill-row-header">
        <span className="skill-row-name">{name}</span>
        <span className="skill-row-pct">{pct}%</span>
      </div>
      <div className="skill-track">
        <div
          className={`skill-fill${color ? " " + color : ""}`}
          style={{ width: animate ? `${pct}%` : "0%" }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  const [activeTab, setActiveTab] = useState("frontend");
  const [animate, setAnimate] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setAnimate(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  const handleTab = (id) => {
    setAnimate(false);
    setActiveTab(id);
    setTimeout(() => setAnimate(true), 60);
  };

  const active = SKILL_CATEGORIES.find((c) => c.id === activeTab);

  return (
    <section id="skills" className="section" ref={sectionRef}>
      <div className="reveal">
        <div className="section-label">04 — skills</div>
        <h2 className="section-title">
          THE<br />
          <span className="accent">TOOLKIT</span><br />
          <span className="serif">& Radar.</span>
        </h2>
      </div>

      <div
        className="reveal"
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "4rem",
          marginTop: "4rem",
          alignItems: "start",
        }}
      >
        {/* Left: tabbed bars */}
        <div>
          {/* Tabs */}
          <div style={{ display: "flex", gap: "0", marginBottom: "2rem", borderBottom: "1px solid var(--border2)" }}>
            {SKILL_CATEGORIES.map(({ id, label }) => (
              <button
                key={id}
                className="skill-tab-v2"
                onClick={() => handleTab(id)}
                style={{
                  background: "none",
                  border: "none",
                  borderBottom: activeTab === id ? "2px solid var(--lime)" : "2px solid transparent",
                  color: activeTab === id ? "var(--lime)" : "var(--muted)",
                  fontFamily: "var(--ff-mono)",
                  fontSize: "0.65rem",
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  padding: "0.6rem 1rem",
                  cursor: "none",
                  transition: "color 0.2s, border-color 0.2s",
                  marginBottom: "-1px",
                }}
              >
                {label}
              </button>
            ))}
          </div>

          {/* Bars */}
          <div>
            {active?.skills.map((s) => (
              <SkillBar
                key={s.name}
                name={s.name}
                pct={s.pct}
                color={s.color}
                animate={animate}
              />
            ))}
          </div>
        </div>

        {/* Right: radar chart */}
        <div>
          <p
            style={{
              fontSize: "0.65rem",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "var(--muted)",
              marginBottom: "1.5rem",
              textAlign: "center",
            }}
          >
            Skill Radar — hover to explore
          </p>
          <RadarChart />
        </div>
      </div>
    </section>
  );
}
