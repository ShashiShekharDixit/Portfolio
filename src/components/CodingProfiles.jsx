import { PROFILES } from "../data/index.js";

export default function CodingProfiles() {
  return (
    <section id="coding" className="section">
      <div className="reveal">
        <div className="section-label">05 — competitive edge</div>
        <h2 className="section-title">
          PLATFORM<br />
          <span className="accent">STATS &</span><br />
          <span className="serif">Rankings.</span>
        </h2>
      </div>

      <div className="reveal" style={{ marginTop: "4rem" }}>
        <div className="profile-grid">
          {PROFILES.map(({ emoji, platform, stat, sub, badge }) => (
            <div className="profile-item" key={platform}>
              <span className="profile-emoji">{emoji}</span>
              <div className="profile-platform">{platform}</div>
              <div className="profile-stat">{stat}</div>
              <div className="profile-sub">{sub}</div>
              <div className="profile-badge-pill">{badge}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
