import { useEffect, useRef, useState } from "react";
import { RADAR_SKILLS } from "../data/index.js";

function polarToXY(angle, radius, cx, cy) {
  const rad = (angle - 90) * (Math.PI / 180);
  return {
    x: cx + radius * Math.cos(rad),
    y: cy + radius * Math.sin(rad),
  };
}

export default function RadarChart() {
  const [animated, setAnimated] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setAnimated(true); obs.disconnect(); } },
      { threshold: 0.3 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  const cx = 200, cy = 200, maxR = 150;
  const n = RADAR_SKILLS.length;
  const levels = [0.25, 0.5, 0.75, 1];

  const getPoints = (scale = 1) =>
    RADAR_SKILLS.map((s, i) => {
      const angle = (360 / n) * i;
      const r = (s.value / 100) * maxR * scale;
      return polarToXY(angle, r, cx, cy);
    });

  const toPath = (pts) =>
    pts.map((p, i) => `${i === 0 ? "M" : "L"}${p.x.toFixed(1)},${p.y.toFixed(1)}`).join(" ") + "Z";

  const dataPoints = getPoints(animated ? 1 : 0);

  return (
    <div ref={ref} className="radar-wrap" style={{ maxWidth: 420, margin: "0 auto" }}>
      <svg viewBox="0 0 400 400" style={{ width: "100%", overflow: "visible" }}>
        {/* Grid rings */}
        {levels.map((lvl) => {
          const pts = RADAR_SKILLS.map((_, i) => {
            const angle = (360 / n) * i;
            return polarToXY(angle, maxR * lvl, cx, cy);
          });
          return (
            <polygon
              key={lvl}
              points={pts.map((p) => `${p.x},${p.y}`).join(" ")}
              fill="none"
              stroke="rgba(200,241,53,0.12)"
              strokeWidth="1"
            />
          );
        })}

        {/* Axis lines */}
        {RADAR_SKILLS.map((_, i) => {
          const angle = (360 / n) * i;
          const end = polarToXY(angle, maxR, cx, cy);
          return (
            <line
              key={i}
              x1={cx} y1={cy}
              x2={end.x} y2={end.y}
              stroke="rgba(200,241,53,0.12)"
              strokeWidth="1"
            />
          );
        })}

        {/* Data polygon */}
        <polygon
          points={dataPoints.map((p) => `${p.x},${p.y}`).join(" ")}
          fill="rgba(200,241,53,0.12)"
          stroke="#c8f135"
          strokeWidth="1.5"
          style={{ transition: animated ? "all 1s ease" : "none" }}
        />

        {/* Data dots */}
        {dataPoints.map((p, i) => (
          <circle
            key={i}
            cx={p.x} cy={p.y}
            r="4"
            fill="#c8f135"
            style={{ transition: animated ? "all 1s ease" : "none" }}
          />
        ))}

        {/* Labels */}
        {RADAR_SKILLS.map((s, i) => {
          const angle = (360 / n) * i;
          const labelR = maxR + 28;
          const pos = polarToXY(angle, labelR, cx, cy);
          return (
            <text
              key={i}
              x={pos.x}
              y={pos.y}
              textAnchor="middle"
              dominantBaseline="middle"
              fill="#5a5a54"
              fontSize="10"
              fontFamily="Space Mono, monospace"
              letterSpacing="1"
            >
              {s.label.toUpperCase()}
            </text>
          );
        })}

        {/* Value labels on dots */}
        {dataPoints.map((p, i) => (
          <text
            key={`v${i}`}
            x={p.x}
            y={p.y - 10}
            textAnchor="middle"
            fill="#c8f135"
            fontSize="9"
            fontFamily="Space Mono, monospace"
            style={{ transition: animated ? "all 1s ease" : "none" }}
          >
            {RADAR_SKILLS[i].value}
          </text>
        ))}
      </svg>
    </div>
  );
}
