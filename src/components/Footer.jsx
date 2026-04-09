export default function Footer() {
  return (
    <footer className="footer-v2">
      <div className="footer-logo">SSD.</div>

      <div style={{ textAlign: "center" }}>
        <div className="footer-copy">
          Designed &amp; built by Shashi Shekhar Dixit — SRMCEM Lucknow, 2025
        </div>
        <div
          className="footer-stack"
          style={{ marginTop: "0.35rem", fontSize: "0.6rem", color: "var(--muted)", letterSpacing: "0.1em" }}
        >
          React · Vite · Three.js · Node.js · Python
        </div>
      </div>

      <div
        style={{
          fontFamily: "var(--ff-mono)",
          fontSize: "0.65rem",
          color: "var(--muted)",
          letterSpacing: "0.1em",
        }}
      >
        v2.0 ◆ 2025
      </div>
    </footer>
  );
}
