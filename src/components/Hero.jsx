import { HERO_STATS } from "../data/index.js";

const scrollTo = (id) =>
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

export default function Hero() {
  return (
    <section id="hero">
      <div className="hero-wrap">
        <div className="hero-eyebrow">
          Available for Opportunities of all Tech Roles
        </div>

        <h1 className="hero-main">
          <span className="glitch" data-text="SHASHI">SHASHI</span>
          <br />
          <span className="lime">SHEKHAR</span>
          <br />
          <span className="stroke">DIXIT</span>
        </h1>

        <div className="hero-sub-row">
          <p className="hero-desc">
            Web Developer + Data Science Enthusiast crafting digital products
            that bridge logic and design — from React UIs to ML insights.
            B.Tech IT @ SRMCEM Lucknow.
          </p>

          <div className="hero-stats-row">
            {HERO_STATS.map(({ num, label }) => (
              <div className="stat-block" key={label}>
                <div className="stat-num">{num}</div>
                <div className="stat-label">{label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="hero-cta-row">
          <button className="btn-lime" onClick={() => scrollTo("projects")}>
            View_Work →
          </button>
          <button className="btn-outline" onClick={() => scrollTo("contact")}>
            Contact_Me
          </button>
        </div>
      </div>
    </section>
  );
}
