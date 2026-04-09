import TerminalBlock from "./TerminalBlock.jsx";

export default function About() {
  return (
    <section id="about" className="section">
      <div className="reveal">
        <div className="section-label">01 — about</div>
        <h2 className="section-title">
          NOT JUST<br />
          <span className="accent">ANOTHER</span><br />
          <span className="serif">Developer.</span>
        </h2>
      </div>

      <div
        className="reveal"
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "4rem",
          alignItems: "start",
          marginTop: "4rem",
        }}
      >
        {/* Left: text */}
        <div>
          <p style={{ fontSize: "0.85rem", color: "var(--bone2)", lineHeight: "2", marginBottom: "1.25rem" }}>
            I'm <span style={{ color: "var(--lime)", fontWeight: 700 }}>Shashi Shekhar Dixit</span> — a final-year
            B.Tech student in Information Technology at SRMCEM, Lucknow, who
            doesn't choose between building and analysing. I do both.
          </p>
          <p style={{ fontSize: "0.85rem", color: "var(--muted)", lineHeight: "2", marginBottom: "1.25rem" }}>
            From building production-grade React apps at{" "}
            <span style={{ color: "var(--bone)" }}>My CTO Innovations</span> to surfacing real-world
            insights from data at <span style={{ color: "var(--bone)" }}>IBM Lucknow</span>, I've spent the
            last two years at the intersection of frontend craft and data science.
          </p>
          <p style={{ fontSize: "0.85rem", color: "var(--muted)", lineHeight: "2", marginBottom: "2.5rem" }}>
            I believe great software isn't just functional — it should feel
            inevitable. Clean code, thoughtful UX, and evidence-backed decisions
            are non-negotiable for me.
          </p>

          {/* Highlight grid */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1px", background: "var(--border2)" }}>
            {[
              ["🎓", "Degree", "B.Tech IT"],
              ["📍", "Location", "Lucknow, UP"],
              ["🏢", "Last Intern", "IBM"],
              ["⚡", "Focus", "Web + Data"],
            ].map(([ic, lb, val]) => (
              <div
                key={lb}
                style={{
                  background: "var(--char2)",
                  padding: "1.25rem",
                  transition: "background 0.2s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.background = "var(--char3)")}
                onMouseLeave={(e) => (e.currentTarget.style.background = "var(--char2)")}
              >
                <div style={{ fontSize: "1.25rem", marginBottom: "0.4rem" }}>{ic}</div>
                <div style={{ fontSize: "0.6rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--muted)", marginBottom: "0.15rem" }}>{lb}</div>
                <div style={{ fontFamily: "var(--ff-display)", fontSize: "1.1rem", letterSpacing: "0.06em", color: "var(--bone)" }}>{val}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: terminal */}
        <div>
          <TerminalBlock />
          {/* ASCII art badge */}
          <pre
            style={{
              marginTop: "1.5rem",
              fontFamily: "var(--ff-mono)",
              fontSize: "0.6rem",
              lineHeight: "1.5",
              color: "var(--char3)",
              userSelect: "none",
            }}
          >
{`┌─────────────────────────────────┐
│  role    : full-stack + data    │
│  status  : open to work         │
│  vibe    : always shipping      │
└─────────────────────────────────┘`}
          </pre>
        </div>
      </div>
    </section>
  );
}
