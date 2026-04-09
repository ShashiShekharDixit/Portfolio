import { useState } from "react";

export default function ResumeGenerator() {
  const [role, setRole]       = useState("");
  const [company, setCompany] = useState("");
  const [output, setOutput]   = useState("");
  const [loading, setLoading] = useState(false);

  const generate = async () => {
    if (!role.trim() || !company.trim()) {
      alert("Please fill in both fields.");
      return;
    }
    setLoading(true);
    setOutput("> generating personalised message...");

    const prompt = `Write a short, personalised cold outreach message (3–4 sentences max) from Shashi Shekhar Dixit applying for the role of "${role}" at "${company}". Shashi is a B.Tech IT graduate with internship experience at IBM (Data Science) and My CTO Innovations (Web Dev). He knows React, Next.js, Node.js, TypeScript, Three.js, Python, Pandas. The message should feel genuine, specific to the company, and end with a call to action. Professional but warm tone. No subject line.`;

    try {
      const res  = await fetch("https://api.anthropic.com/v1/messages", {
        method:  "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          model:      "claude-sonnet-4-20250514",
          max_tokens: 350,
          messages:   [{ role: "user", content: prompt }],
        }),
      });
      const data = await res.json();
      setOutput(data.content?.[0]?.text || "> error generating. try again.");
    } catch {
      setOutput(
        `> Hi, I'm Shashi Shekhar Dixit — B.Tech IT with internships at IBM and My CTO Innovations. I'm very interested in the ${role} role at ${company} and believe my full-stack + data science background could add real value to your team. I'd love to connect!`
      );
    }
    setLoading(false);
  };

  return (
    <section id="resume" className="section">
      <div className="reveal">
        <div className="section-label">09 — ai tools</div>
        <h2 className="section-title">
          RECRUITER<br />
          <span className="accent">MESSAGE</span><br />
          <span className="serif">Generator.</span>
        </h2>
        <p style={{ fontSize: "0.75rem", color: "var(--muted)", marginTop: "0.5rem", maxWidth: "420px" }}>
          AI-powered personalised outreach — enter a role and company to get a tailored pitch from Shashi.
        </p>
      </div>

      <div className="gen-wrap reveal">
        <div className="gen-title">Generate Personalised Message</div>
        <p className="gen-sub">
          Enter a job role and company name to generate a tailored cold outreach message.
        </p>
        <div className="gen-form">
          <input
            className="gen-input"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            placeholder="Job Role (e.g., Frontend Engineer)"
          />
          <input
            className="gen-input"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            placeholder="Company (e.g., Google)"
          />
          <button
            className="gen-btn"
            onClick={generate}
            disabled={loading}
          >
            {loading ? "Loading…" : "Generate ✦"}
          </button>
        </div>
        {output && (
          <div className={`gen-output${output ? " show" : ""}`}>{output}</div>
        )}
      </div>
    </section>
  );
}
