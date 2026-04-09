import { MARQUEE_ITEMS } from "../data/index.js";

export default function Marquee() {
  const doubled = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS];

  return (
    <div className="marquee-wrap">
      <div className="marquee-track">
        {doubled.map((item, i) => (
          <span className="marquee-item" key={i}>
            {item}
            <span className="dot">◆</span>
          </span>
        ))}
      </div>
    </div>
  );
}
