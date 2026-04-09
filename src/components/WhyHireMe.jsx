import { WHY_CARDS } from "../data/index.js";

export default function WhyHireMe() {
  return (
    <section id="why" className="section">
      <div className="reveal">
        <div className="section-label">07 — why hire me</div>
        <h2 className="section-title">
          THE HONEST<br />
          <span className="accent">CASE FOR</span><br />
          <span className="serif">Hiring Me.</span>
        </h2>
        <p
          style={{
            fontSize: "0.75rem",
            color: "var(--muted)",
            marginTop: "0.5rem",
          }}
        >
          Rare combo. Serious about craft. Hungry to grow.
        </p>
      </div>

      <div className="grid-2 reveal" style={{ marginTop: "4rem" }}>
        {WHY_CARDS.map(({ index, icon, title, desc }) => (
          <div className="why-v2" key={index} data-index={index}>
            <div className="why-icon-box">{icon}</div>
            <div className="why-title-v2">{title}</div>
            <p className="why-desc-v2">{desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
