import { useState, useEffect, useRef } from "react";
import { PERF_SCORES } from "../data/index.js";

function Ring({ score, label, color, animate }) {
  const r = 52;
  const circ = 2 * Math.PI * r;
  const offset = animate ? circ - (score / 100) * circ : circ;

  return (
    <div style={{ textAlign: "center" }}>
      <div style={{ position: "relative", width: 120, height: 120, margin: "0 auto 0.75rem" }}>
        <svg viewBox="0 0 120 120" width="120" height="120" style={{ transform: "rotate(-90deg)" }}>
          {/* Track */}
          <circle
            cx="60" cy="60" r={r}
            fill="none"
            stroke="rgba(255,255,255,0.04)"
            strokeWidth="6"
          />
          {/* Fill */}
          <circle
            cx="60" cy="60" r={r}
            fill="none"
            stroke={color}
            strokeWidth="6"
            strokeLinecap="square"
            strokeDasharray={circ}
            strokeDashoffset={offset}
            style={{ transition: animate ? "stroke-dashoffset 1.4s cubic-bezier(0.16,1,0.3,1)" : "none" }}
          />
        </svg>
        {/* Value */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontFamily: "var(--ff-display)",
            fontSize: "1.6rem",
            letterSpacing: "0.04em",
            color: color,
          }}
        >
          {score}
        </div>
      </div>
      <div
        style={{
          fontSize: "0.6rem",
          letterSpacing: "0.2em",
          textTransform: "uppercase",
          color: "var(--muted)",
        }}
      >
        {label}
      </div>
    </div>
  );
}

export default function Performance() {
  const [animate, setAnimate] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setAnimate(true); },
      { threshold: 0.2 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="performance" className="section" ref={ref}>
      <div className="reveal" style={{ textAlign: "center" }}>
        <div className="section-label" style={{ justifyContent: "center" }}>
          06 — lighthouse scores
        </div>
        <h2 className="section-title">
          BUILT FOR<br />
          <span className="accent">REAL-WORLD</span><br />
          <span className="serif">Performance.</span>
        </h2>
        <p
          style={{
            fontSize: "0.75rem",
            color: "var(--muted)",
            marginTop: "0.5rem",
          }}
        >
          Not just impressive screenshots — actual measurable results.
        </p>
      </div>

      <div
        className="reveal"
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "4rem",
          flexWrap: "wrap",
          marginTop: "4rem",
          padding: "3rem",
          border: "1px solid var(--border2)",
          background: "var(--char2)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* scanline overlay via pseudo-element simulation */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.06) 2px, rgba(0,0,0,0.06) 4px)",
            pointerEvents: "none",
          }}
        />
        {PERF_SCORES.map(({ score, label, color }) => (
          <Ring
            key={label}
            score={score}
            label={label}
            color={color}
            animate={animate}
          />
        ))}
      </div>
    </section>
  );
}
