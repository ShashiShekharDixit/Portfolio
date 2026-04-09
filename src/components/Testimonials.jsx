import { TESTIMONIALS } from "../data/index.js";

export default function Testimonials() {
  return (
    <section id="testimonials" className="section">
      <div className="reveal">
        <div className="section-label">08 — testimonials</div>
        <h2 className="section-title">
          WHAT<br />
          <span className="accent">PEOPLE</span><br />
          <span className="serif">Say.</span>
        </h2>
      </div>

      <div className="grid-3 reveal" style={{ marginTop: "4rem" }}>
        {TESTIMONIALS.map(({ initials, name, role, text }, i) => (
          <div className="testi-v2" key={name}>
            <div className="testi-number">0{i + 1}</div>
            <p className="testi-text-v2">"{text}"</p>
            <div className="testi-author-v2">
              <div className="testi-initials">{initials}</div>
              <div>
                <div className="testi-name-v2">{name}</div>
                <div className="testi-role-v2">{role}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
