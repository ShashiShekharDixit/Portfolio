import { useState, useEffect } from "react";
import { NAV_LINKS } from "../data/index.js";

const scrollTo = (id) =>
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <nav className={`navbar${scrolled ? " scrolled" : ""}`}>
      <div className="nav-logo">
        SSD<span>.</span>
      </div>

      <ul className="nav-links">
        {NAV_LINKS.map((id) => (
          <li key={id}>
            <a
              href={`#${id}`}
              onClick={(e) => {
                e.preventDefault();
                scrollTo(id);
              }}
            >
              {id}
            </a>
          </li>
        ))}
      </ul>

      <button className="nav-hire" onClick={() => scrollTo("contact")}>
        Hire_Me
      </button>
    </nav>
  );
}
